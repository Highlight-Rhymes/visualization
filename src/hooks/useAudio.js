import { useState } from 'react';

const useAudio = function() {

  const source = audioContext.createBufferSource();

  const loadAudio = async function (arrayBuffer) {
    audioContext.decodeAudioData(arrayBuffer, audioBuffer => {
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.loop = true;
    },
    (err) => {
      console.error("Error decoding array buffer of audio data.")
      throw err;
    })
  }

  const play = async function() {
    source.start(0);
  }

  const pause = async function() {
    source.stop(0);
  }

  return {
    loadAudio,
    play,
    pause
  }

}

export default useAudio;
