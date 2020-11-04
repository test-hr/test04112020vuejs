import { AxiosInstance } from 'axios';
import { CrudApiImpl } from '@/shared/api/crud_api/CrudApiImpl';
import { User } from '@/modules/user/User';
import { IUserApi } from '@/modules/user/api/IUserApi';

export class UserApi extends CrudApiImpl<User> implements IUserApi {
  constructor(protected axios: AxiosInstance) {
    super(axios, '/users');
  }
}
