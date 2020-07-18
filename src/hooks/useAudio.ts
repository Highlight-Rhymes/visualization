import { useState, useEffect } from "react";

function useAudioPlayer(audioRef: React.RefObject<HTMLAudioElement>) {
  const [duration, setDuration] = useState<number>(0);
  const [curTime, setCurTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [clickedTime, setClickedTime] = useState<number>(-1);

  useEffect(() => {
    if (!audioRef?.current) {
      return;
    }
    const audio = audioRef.current;

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

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(-1);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  }, [ audioRef ]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  }
}

export default useAudioPlayer;