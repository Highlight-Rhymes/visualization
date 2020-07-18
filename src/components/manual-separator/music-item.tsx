import React from 'react';
import AudioPlayer from '../wav-player/index'
import { MusicI } from '../../types';

export interface Props {
  music: MusicI
}

const MusicItem = function(props: Props) {

  const { music } = props;

  const hasIntervals = music.intervals !== undefined;
  const hasData = music.data !== undefined;

  return (
    <div key={music._id}>
      <p>Nome {music.name}</p>
      <p>_id {music._id}</p>
      { hasIntervals && 
      <div>
        Intervals:
        {
          music.intervals?.map(([ start, end ]) => (
            <div>
              from: {start}
              to: {end}
            </div>
          ))
        }
      </div>
      }
      {
        hasData &&
        <p>Has music .wav</p>
      }
      <AudioPlayer src="./eu-nao-te-amo-don.wav"/>
    </div>
  )
}

export default MusicItem
