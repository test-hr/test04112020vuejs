import { CrudApi } from '@/shared/api/crud_api/CrudApi';
import { UserRequest, UserResponse } from '@/modules/user/api/UserTypes';

export type IUserApi = CrudApi<UserResponse, UserResponse, UserRequest>;
