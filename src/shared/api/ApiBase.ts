import { IApiBase } from '@/shared/api/IApiBase';
import { ErrorObject } from '@/shared/api/ErrorObject';
import { AxiosInstance } from 'axios';
import { ApiError } from '@/shared/api/ApiError';
import { getErrorCode } from '@/shared/api/getErrorCode';

export abstract class ApiBase<E = ApiError> implements IApiBase<E> {
  protected axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getErrorCode(error: ErrorObject): E | ApiError {
    return getErrorCode(error);
  }
}
