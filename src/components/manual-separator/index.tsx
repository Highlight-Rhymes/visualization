import React, { useEffect, useState } from 'react';
import { CreateSeparatorDataAPI } from '../../api'
import { MusicI } from '../../types'
import MusicList from './music-list';
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
      <MusicList musics={musics}/>
      <IntervalsController/>
      <UploadMusic/>
    </div>
  )
}

export default ManualSeparator
