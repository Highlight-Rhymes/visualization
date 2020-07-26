import React from 'react';
import pauseIcon from '../../assets/images/pause.png'
import playIcon from '../../assets/images/play.png'
import "./styles/AudioController.css"

interface Props {
  onPlay: () => void;
  onPause: () => void;
  onStartClip: () => void;
  onEndClip: () => void;
  playing: boolean;
  clipping: boolean;
  onResetClip: () => void;
  playbackRate: number;
  onPlaybackRateChange: (speed: number) => void;
}

const Icon = ({ src, size, alt, onClick }: { src: string, size: number, alt: string, onClick: (event: React.MouseEvent<HTMLImageElement>) => void }) => 
  <img className="icon"
    src={src} 
    style={{
      width: size,
      height: size
    }}
    onClick={onClick}
    alt={alt}
  />


const AudioControllers = function(props: Props) {
  const { onPlay, onPause, onStartClip, onEndClip, playing, clipping, onResetClip, playbackRate, onPlaybackRateChange } = props;
  
  const handleClick = function() {
    if (clipping) {
      onEndClip();
    } else {
      onStartClip();
    }
  }

  return (
    <div className="AudioController">
      {
        playing ?
        <Icon src={pauseIcon} alt="Pause" onClick={onPause} size={30}/> :
          <Icon src={playIcon} alt="Play" onClick={onPlay} size={30}/>
      }
      <label>Speed</label>
      <input value={playbackRate} onChange={e => onPlaybackRateChange(parseFloat(e.target.value))} type="number" max="3.0" min="0.1" step="0.05" />
      <button onClick={handleClick}>{ clipping ? "Clip" : "Start Clipping"}</button>
      { clipping && <button onClick={onResetClip}>Cancelar</button> }
    </div>
  )
}

export default AudioControllers;
 