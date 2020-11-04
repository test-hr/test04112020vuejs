import { CrudApi } from '@/shared/api/crud_api/CrudApi';
import { TodoRequest, TodoResponse } from '@/modules/todo/api/TodoTypes';

export type ITodoApi = CrudApi<TodoResponse, TodoResponse, TodoRequest>;
