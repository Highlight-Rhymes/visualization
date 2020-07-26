import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { PeaksInstance, SegmentAddOptions } from 'peaks.js';
import AudioController from '../../audio-controllers';
import { MusicI, TimeInterval } from '../../../types';
import Peaks, { PeaksOptions } from 'peaks.js';
import Interval from './interval';

const UNSET_TIME: number = -1;
interface IntervalsControllerProps {
  music: MusicI;
} 

const IntervalsController = function(props: IntervalsControllerProps) {
  const { music } = props;

  const [ peaksLoading, setPeaksLoading ] = useState<boolean>(true);
  const [ peaks, setPeaks ] = useState<PeaksInstance | null>(null)
  const zoomviewContainerRef = useRef<HTMLDivElement>(null);
  const overviewContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {

    setPeaksLoading(true);

    if (!audioRef || !zoomviewContainerRef || !overviewContainerRef) {
      return;
    }

    const audioElement = ReactDOM.findDOMNode(audioRef.current);

    // can only use subset of types possibly returned by ReactDOM.findDOMNode
    if (!audioElement || audioElement instanceof Text) {
      console.warn("Audio tag associated with Peaks.js is wrongly configured")
      return;
    }
    const defaultOptions: PeaksOptions = {
      containers: {
        zoomview: zoomviewContainerRef.current,
        overview: overviewContainerRef.current
      },
      mediaElement: audioElement,
      webAudio: {
        /**
         * A Web Audio AudioContext instance which can be used
         * to render the waveform if dataUri is not provided
         */
        audioContext: new AudioContext(),
        /**
         * If true, the waveform will show all available channels.
         * If false, the audio is shown as a single channel waveform.
         */
        multiChannel: false
      },
    }
    Peaks.init(defaultOptions, (error, peaks) => {
      if (error) {
        console.error(error);
        return;
      }
      setPeaks(peaks || null);
      setPeaksLoading(false)
    });
    return () => {
      peaks?.destroy();
    }
  }, [ music ])

  const [ playing, setPlaying ] = useState<boolean>(false);

  const getCurrentTime = () => peaks?.player.getCurrentTime();
  const play = () => {
    setPlaying(true);
    peaks?.player.play();
  }
  const pause = () => {
    setPlaying(false)
    peaks?.player.pause();
  }

  /**
   * @type {[ number, Function ]} start time in ms of new segment state and state setter
   */
  const [ newSegmentStart, setNewSegmentStart ] = useState<number>(UNSET_TIME)
  

  const playSegment = (segmentId: string) => {
    const segs = getSegments();
    if (!segs) {
      console.warn("No segments in peaks.segments")
      return null;
    }
    const seg = segs.find(s => s.id === segmentId)
    if (!seg) {
      console.error("No segment w/ id " + segmentId);
      return;
    }
    peaks?.player.playSegment(seg);
  }

  const addSegment = (start: number, end: number) => {
    // @todo make HTTP request to backend
    peaks?.segments.add(
      createSegment({
        _id: peaks?.segments.getSegments().length.toString(), // segment _id from http response
        start,
        end,
        musicId: music._id
      })
    )
  }
  
  const createSegment = (interval: TimeInterval): SegmentAddOptions => {
    const { start, end, _id } = interval;
    return {
      startTime: start,
      endTime: end,
      id: _id,
      labelText: _id,
      editable: true
    }
  }

  const getSegments = () =>  peaks?.segments.getSegments()

  const [ clipping, setClipping ] = useState<boolean>(false)

  const handleStartClip = () => {
    const time = getCurrentTime();
    setClipping(true);
    if (typeof time === "number") {
      setNewSegmentStart(time)
    }
  }

  const handleEndClip = () => {
    const time = getCurrentTime();
    setClipping(false)
    if (typeof time === "number") {
      addSegment(newSegmentStart, time)
    }
  }

  const handleResetClip = () => {
    setClipping(false);
    setNewSegmentStart(UNSET_TIME)
  }

  const [ playbackRate, setPlaybackRate ] = useState<number>(1);

  useEffect(() => {
    if(audioRef.current) {
      audioRef.current.playbackRate = playbackRate
    }
  }, [ playbackRate ])


  return (
    <div>
      <label>Nome da faixa:</label>
      <p>{music.name}</p>
      <div id="peaks-container">
        <audio ref={audioRef}>
          <source src={music.src} />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <div id="zoomview-container" ref={zoomviewContainerRef}></div>
        <div id="overview-container" ref={overviewContainerRef}></div>
      </div>
      <div>
        {
          getSegments()?.map((s, i) => s && <Interval segment={s}
                                              index={i}
                                              onClick={playSegment}
                                              key={i}
                                              />)
        }
      </div>
        {
          peaksLoading ?
            <p>Loading Waveform...</p> :
            <AudioController onPlay={play} 
              onPause={pause}
              onStartClip={handleStartClip}
              onEndClip={handleEndClip}
              playing={playing}
              clipping={clipping}
              onResetClip={handleResetClip}
              playbackRate={playbackRate}
              onPlaybackRateChange={setPlaybackRate}
            />
        }
    </div>
  )
}

export default IntervalsController;
