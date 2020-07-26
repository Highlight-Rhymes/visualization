import React from 'react';
import AudioPlayer from '../../wav-player/index'
import { MusicI } from '../../../types';
import '../styles/MusicItem.css'

export interface IntervalProps {
  start: number;
  end: number;
}

const Interval = function(props: IntervalProps) {
  const { start, end } = props;
  return (
    <div>
      from: {start}
      to: {end}
    </div>
  )
}

export interface MusicItemProps {
  music: MusicI;
  onClick?: (musicId: string) => void
}

const MusicItem = function(props: MusicItemProps) {

  const { music, onClick } = props;

  const hasIntervals = music.intervals !== undefined;
  const hasData = music.data !== undefined;

  return (
    <div className="MusicItem"
      onClick={() => {
        onClick && onClick(music._id)
      }}>
      <p>Nome {music.name}</p>
      { hasIntervals ? 
        <div>
          Intervals:
          {
            music.intervals?.map(({ start, end }) => (
              <Interval start={start} end={end}/>
            ))
          }
        </div> :
        <p>Esse áudio ainda não foi dividido em pedaços</p>
      }
      {/*
        (hasData || true) && // finge que todas as músicas tem .wav por enquanto
        <AudioPlayer src="./eu-nao-te-amo-don.wav"/>
      */}
    </div>
  )
}

export default MusicItem
