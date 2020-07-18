import React, { useState } from 'react';
import MusicItem from './music-item';

import { MusicI } from '../../../types';

interface Props {
  musics: MusicI[];
  /**
   * True if should have a button to hide or show list
   */
  allowHide?: boolean;
}
const MusicList = function({ allowHide = true, ...props }: Props) {

  const { musics } = props;
  const [ visible, setVisible ] = useState<boolean>(true);

  return (
    <div>
      { 
        allowHide && 
        <button onClick={() => setVisible(!visible)}>{visible ? "Esconder" : "Mostrar"} lista de músicas</button>
        }
      { 
        visible &&
        <div>
          {
            musics.map(m => <MusicItem music={m} key={m._id}/>)
          }
        </div>
      }
    </div>
  )
}

export default MusicList;
