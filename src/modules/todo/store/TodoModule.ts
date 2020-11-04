import { CrudModule } from '@/shared/store/crud/CrudModule';
import {
  TodoRequest,
  TodoResponse,
} from '@/modules/todo/api/TodoTypes';

export type TodoModule = CrudModule<
  TodoResponse,
  TodoResponse,
  TodoRequest
>;
