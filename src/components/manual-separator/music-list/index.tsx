import React, { useState } from 'react';
import MusicItem from './music-item';
import '../styles/MusicList.css'

import { MusicI } from '../../../types';

interface Props {
  musics: MusicI[];
  /**
   * True if should have a button to hide or show list
   */
  allowHide?: boolean;
  onClick?: (musicId: string) => void
}
const MusicList = function({ allowHide = true, ...props }: Props) {

  const { musics, onClick } = props;
  const [ visible, setVisible ] = useState<boolean>(true);

  return (
    <div className="MusicList">
      { 
        allowHide && 
        <button onClick={() => setVisible(!visible)}>{visible ? "Esconder" : "Mostrar"} lista de músicas</button>
        }
      {
        <div className="musics-wrapper" hidden={visible}>
          {
            musics.map(m => <MusicItem music={m} key={m._id} onClick={onClick}/>)
          }
        </div>
      }
    </div>
  )
}

export default MusicList;
