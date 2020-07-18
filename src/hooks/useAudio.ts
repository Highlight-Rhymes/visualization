import { useState, useEffect } from "react";
import { isNumber } from "util";

function useAudioPlayer(audioRef: React.RefObject<HTMLAudioElement>) {
  const [duration, setDuration] = useState<number>(0);
  const [curTime, setCurTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [clickedTime, setClickedTime] = useState<number | null>(null);

  useEffect(() => {
    console.log("Audio data of ", audioRef)
    if (!audioRef?.current) {
      return;
    }
    const audio = audioRef.current;
    console.log({duration, curTime, playing, clickedTime})
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime !== curTime && isNumber(clickedTime)) {
      audio.currentTime = clickedTime;
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  }, [ audioRef, playing, clickedTime ]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  }
}

export default useAudioPlayer;