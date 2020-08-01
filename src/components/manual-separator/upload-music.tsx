import React, { useState } from 'react';
import CreateDataAPI from '../../api/create-separator-data';

const UploadMusic = function(props: {}) {
  const [ name, setName ] = useState<string>('');
  const [ file, setFile] = useState<Blob | null>(null);

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files || files?.length === 0) {
      return;
    }
    const file = files[0];
    setFile(file);
  }

  const handleMusicPost = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file && name.length > 0) {
      CreateDataAPI.createMusic(name, file)
        .then(res => {
          console.log('Status: ', res.status);
          if (res.status === 200) {
            console.log('Música inserida!')
          } else {
            console.log('Música não inserida');
            console.log('status ', res.status, '\nMessage: ',res.message)
          }
        })
        .catch(err => {
          throw err;
        });
    }
  }

  return (
    <div>
      <form onSubmit={handleMusicPost}>
        <label>Nome da música</label>
        <input type='text'
          onChange={e => setName(e.target.value)}
          value={name}/>
        <label>.mp3 da música</label>
        <input type='file' onChange={handleFileInput}/>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default UploadMusic;
