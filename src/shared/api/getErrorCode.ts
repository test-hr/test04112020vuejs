import { ErrorObject } from '@/shared/api/ErrorObject';
import { ApiError } from '@/shared/api/ApiError';

export const getErrorCode: (error: ErrorObject) => ApiError = (error) => {
  if (!error.response) {
    return ApiError.UNKNOWN;
  }
  const { status } = error.response;
  if (status === 404) {
    return ApiError.NOT_FOUND;
  }
  if (status === 401) {
    return ApiError.UNAUTHORIZED;
  }
  return ApiError.UNKNOWN;
};
