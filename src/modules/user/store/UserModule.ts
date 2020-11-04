import { CrudModule } from '@/shared/store/crud/CrudModule';
import {
  UserRequest,
  UserResponse,
} from '@/modules/user/api/UserTypes';

export type UserModule = CrudModule<
  UserResponse,
  UserResponse,
  UserRequest
>;
