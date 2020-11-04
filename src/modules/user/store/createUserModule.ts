import { Store } from 'vuex';
import { Modules } from '@/store/Modules';
import { createCrudModule } from '@/shared/store/crud/createCrudModule';
import { getModule } from 'vuex-module-decorators';
import { IUserApi } from '@/modules/user/api/IUserApi';
import { UserModule } from '@/modules/user/store/UserModule';
import { User } from '@/modules/user/User';

const createUserModule: (
  store: Store<{}>,
  api: IUserApi,
) => UserModule = (store: Store<{}>, api: IUserApi) => {
  const name = Modules.USER_MODULE;

  // tslint:disable-next-line:variable-name
  const BaseUserModuleClass = createCrudModule<User>(store, api, name);

  return getModule(BaseUserModuleClass);
};

// tslint:disable-next-line
export { createUserModule };
