import React from 'react';
import MusicItem from './music-item';

import { MusicI } from '../../../types';

interface Props {
  musics: MusicI[];
}
const MusicList = function(props: Props) {

  const { musics } = props;
  return (
    <div>
      {
        musics.map(m => <MusicItem music={m} key={m._id}/>)
      }
    </div>
  )
}

export default MusicList;
