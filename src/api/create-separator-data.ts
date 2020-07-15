import { MusicI, TimeInterval } from "../types";
import { ResponseI } from './index';
import MUSICS from './musics-stub';

/**
 * Descreve a música que se quer pegar da API
 */
interface MusicFilterI {
  name?: string;
  _id?: string;
}

/**
 * Representa os novos valores para os campos de uma música
 */
interface UpdateMusicI { 
  name?: string, 
  data?: Uint8Array, 
  intervals?: TimeInterval[]
}

export default {
  getMusics: async(filter: MusicFilterI = {}): Promise<ResponseI<MusicI[]>> => {
    return {
      status: 200,
      data: MUSICS,
      message: "Aqui estão as músicas"
    };
  },
  updateMusic: async(musicId: string, update: UpdateMusicI): Promise<ResponseI<MusicI | void>> => {
    const music = MUSICS.find(m => m._id === musicId);
    if (!music) {
      return {
        status: 404,
        message: "Não achamos a música",
        data: undefined
      }
    } else {
      if (update.name) {
        music.name = update.name;
      }
      if (update.data) {
        music.data = update.data;
      }
      if(update.intervals) {
        music.intervals = update.intervals
      }
    }
    return {
      status: 200,
      data: music,
      message: "Música atualizada"
    };
  },
  createMusic: async(name: string, data: Uint8Array): Promise<ResponseI<MusicI>> => {
    const music: MusicI = {
      name,
      data,
      _id: String(MUSICS.length)
    };
    MUSICS.push(music)
    return {
      status: 200,
      data: music,
      message: "Música criada."
    }
  }
}
