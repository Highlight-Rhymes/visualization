import React, { useEffect, useState } from 'react';
import { CreateSeparatorDataAPI } from '../../api'
import { MusicI } from '../../types'
import MusicItem from './music-item';
import UploadMusic from './upload-music';
import IntervalsController from './intervals-controller';

export interface Props {

}

const ManualSeparator = function(props: Props) {

  const [ musics, setMusics ] = useState<MusicI[]>([])

  useEffect(() => {
    CreateSeparatorDataAPI.getMusics()
      .then(res => res.data)
      .then(musics => {
        setMusics(musics);
      })
  }, [])

  return (
    <div>
      <div>
        Músicas Disponívels:
        {
          musics.map(m => <MusicItem music={m}/>)
        }
      </div>
      <div>
        <IntervalsController/>
      </div>
      <div>
        <UploadMusic/>
      </div>
    </div>
  )
}

export default ManualSeparator
