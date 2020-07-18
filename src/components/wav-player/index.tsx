import React, { useState, useRef } from 'react';
import useAudio from '../../hooks/useAudio'
import TimeControl from './time-contrlol';

interface Props {

}

const MusicPlayer = function(props: Props) {

  const audioRef = useRef(null);
  const { curTime, duration, playing, setClickedTime, setPlaying } = useAudio(audioRef);

  return (
    <div>
      <audio ref={audioRef}>
        <source src="./song.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
      {/* <label>Playback rate: </label>
      <input type="number"
        value={playbackRate}
        step="0.05"
        min ="0.000"
        max="1.5"
        onChange={val => setPlaybackRate(val.target.value) }
      /> */}
      <button onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"}</button>
      <TimeControl curTime={curTime} duration={duration} onTimeChange={(time) => setClickedTime(time)}/>
    </div>
  )
}

export default MusicPlayer;
