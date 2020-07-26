import React, { useEffect, useRef } from 'react';
import Peaks, { PeaksOptions, PeaksInitCallback, OptionalOptions } from 'peaks.js';
import ReactDOM from 'react-dom';

const defaultOnInit: PeaksInitCallback = (error, peaks) => {
  if (error) {
    throw error;
  }
  else {
    console.log(peaks);
  }
}

interface Props {
  /**
   * Configuração do Peaks.js
   * @see https://github.com/bbc/peaks.js#configuration
   */
  options?: OptionalOptions;
  onInit?: PeaksInitCallback;
  /**
   * Temporary way of inputing audio to components. Later it will be replaced by requests
   */
  src: string;
}

/**
 * 
 * @see https://github.com/bbc/peaks.js#player-api
 */
const Waveform = function({ src, options, onInit = defaultOnInit , ...props }: Props) {
  const zoomviewContainerRef = useRef<HTMLDivElement>(null);
  const overviewContainerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {

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

    const mergedOptions = {
      ...defaultOptions,
      ...(options || {})
    }
    Peaks.init(mergedOptions, onInit);
    return () => {
      
    }
  }, [ options, onInit ])

  return (
    <div id="peaks-container">
      <audio ref={audioRef}>
        <source src={src} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div id="zoomview-container" ref={zoomviewContainerRef}></div>
      <div id="overview-container" ref={overviewContainerRef}></div>
    </div>
  )
}

export default Waveform;
