type ReturnSuccess<T> = {
  type: 'OK' | 'CREATED'
  data: T
};

type ReturnError = {
  type: 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA'
  data: {
    message: string
  }
};

export type ReturnSevice<T> = ReturnSuccess<T> | ReturnError;