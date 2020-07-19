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
  const [ musicInWorkspaceId, setMusicInWorkspaceId ] = useState<string | null>(null);

  const musicInWorkspace: MusicI | undefined = musics.find(m => m._id === musicInWorkspaceId)

  useEffect(() => {
    CreateSeparatorDataAPI.getMusics()
      .then(res => res.data)
      .then(musics => {
        setMusics(musics);
      })
  }, [])

  return (
    <div>
      <MusicList musics={musics}
        onClick={musicId => setMusicInWorkspaceId(musicId)}
        allowHide/>
      {
        musicInWorkspace &&
        <IntervalsController music={musicInWorkspace}/>
      }
      <UploadMusic/>
    </div>
  )
}

export default ManualSeparator
