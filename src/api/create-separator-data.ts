import { MusicI } from "../types";
import { ResponseI } from './index';

interface MusicFilterI {
  nome?: string;
  _id?: string;
}

export default {
  getMusics: async(filter: MusicFilterI = {}): Promise<ResponseI<MusicI[]>> => {
    return {
      status: 200,
      data: [{ _id: '0', name: 'Sei la' }],
      message: "Aqui estão as músicas"
    };
  },
  updateMusic: async(musicId: string): Promise<ResponseI<MusicI>> => {
    return {
      status: 200,
      data: {
        name: "Sei laa",
        _id: '0'
      },
      message: "Música atualizada"
    };
  },
  createMusic: async(name: string, data: Uint8Array): Promise<ResponseI<MusicI>> => {
    return {
      status: 200,
      data: {
        name,
        _id: '1'
      },
      message: "Música criada."
    }
  }
}
