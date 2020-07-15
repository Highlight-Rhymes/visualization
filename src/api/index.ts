import CreateSeparatorDataAPI from './create-separator-data';

interface ResponseI<T> {
  status: number;
  data: T;
  message?: string;
}

export {
  CreateSeparatorDataAPI,
}

export type {
  ResponseI
}