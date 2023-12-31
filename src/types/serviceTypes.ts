type ReturnError = {
  type: 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA'
  data: {
    message: string
  }
};

type ReturnSuccess<T> = {
  type: 'OK' | 'CREATED'
  data: T
};

export type ReturnSevice<T> = ReturnSuccess<T> | ReturnError;