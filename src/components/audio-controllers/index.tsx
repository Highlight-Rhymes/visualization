import React, { useState } from 'react';
import pauseIcon from '../../assets/images/pause.png'
import playIcon from '../../assets/images/play.png'
import "./styles/AudioController.css"

interface Props {
  onPlay: () => void;
  onPause: () => void;
  onStartClip: () => void;
  onEndClip: () => void;
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
  const { onPlay, onPause, onStartClip, onEndClip } = props;
  const [ clipping, setClipping ] = useState<boolean>(false);

  
  const handleClick = function() {
    if (clipping) {
      onEndClip();
      setClipping(false);
    } else {
      onStartClip();
      setClipping(true);
    }
  }

  return (
    <div className="AudioController">
      <Icon src={playIcon} alt="Play" onClick={onPlay} size={30}/>
      <Icon src={pauseIcon} alt="Play" onClick={onPause} size={30}/>
      <button onClick={handleClick}>{ clipping ? "Clip" : "Start Clipping"}</button>
    </div>
  )
}

export default AudioControllers;
 