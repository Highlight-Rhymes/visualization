import CreateSeparatorDataAPI from './create-separator-data';

/**
 * Representa uma resposta do servidor
 */
interface ResponseI<T> {
  status: number;
  /**
   * Os recursos pedidos à API
   */
  data?: T;
  message?: string;
}

export {
  CreateSeparatorDataAPI,
}

export type {
  ResponseI
}