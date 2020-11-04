import { AxiosInstance } from 'axios';
import { CrudApiImpl } from '@/shared/api/crud_api/CrudApiImpl';
import { Todo } from '@/modules/todo/Todo';
import { ITodoApi } from '@/modules/todo/api/ITodoApi';

export class TodoApi extends CrudApiImpl<Todo> implements ITodoApi {
  constructor(protected axios: AxiosInstance) {
    super(axios, '/todos');
  }
}
