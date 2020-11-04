import { ErrorObject } from '@/shared/api/ErrorObject';
import { ApiError } from '@/shared/api/ApiError';

export interface IApiBase<E = ApiError> {
  getErrorCode(error: ErrorObject): E | ApiError;
}
