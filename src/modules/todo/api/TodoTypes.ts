import { Todo } from '@/modules/todo/Todo';

export type TodoResponse = Todo;

export interface TodoRequest extends Partial<Todo> {
}
