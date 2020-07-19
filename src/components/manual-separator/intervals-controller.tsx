import React from 'react';
import CustomWavDisplay from '../waveform';
import { MusicI } from '../../types';

interface IntervalsControllerProps {
  music: MusicI;
} 

const IntervalsController = function(props: IntervalsControllerProps) {
  const { music } = props;

  return (
    <div>
      <label>Nome da faixa:</label>
      <p>{music.name}</p>
      <CustomWavDisplay src="./eu-nao-te-amo-don.wav"/>
    </div>
  )
}

export default IntervalsController;
