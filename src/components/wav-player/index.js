import React, { useState } from 'react';

const MusicPlayer = function(props) {

  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ playbackRate, setPlaybackRate ] = useState(1);

  const handlePlay = () => {
    alert("Play was given.")
  }

  return (
    <div>
      <p>Music player</p>
      <p>Loaded audio: ______ </p>
      <label>Playback rate: </label>
      <input type="number"
        value={playbackRate}
        step="0.05"
        min ="0.000"
        max="1.5"
        onChange={val => setPlaybackRate(val.target.value) }
      />
      <button onClick={handlePlay}>Play</button>
    </div>
  )
}

export default MusicPlayer;
