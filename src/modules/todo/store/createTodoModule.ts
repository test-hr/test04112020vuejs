import { Store } from 'vuex';
import { Modules } from '@/store/Modules';
import { createCrudModule } from '@/shared/store/crud/createCrudModule';
import { getModule } from 'vuex-module-decorators';
import { ITodoApi } from '@/modules/todo/api/ITodoApi';
import { TodoModule } from '@/modules/todo/store/TodoModule';
import { Todo } from '@/modules/todo/Todo';

const createTodoModule: (
  store: Store<{}>,
  api: ITodoApi,
) => TodoModule = (store: Store<{}>, api: ITodoApi) => {
  const name = Modules.TODO_MODULE;

  // tslint:disable-next-line:variable-name
  const BaseTodoModuleClass = createCrudModule<Todo>(store, api, name);

  return getModule(BaseTodoModuleClass);
};

// tslint:disable-next-line
export { createTodoModule };
