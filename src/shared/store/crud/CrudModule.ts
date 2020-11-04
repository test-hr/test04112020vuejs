import { Identifiable } from '@/shared/store/crud/Identifiable';

export interface CrudModule<
  GET_RESPONSE extends Identifiable,
  INDEX_RESPONSE extends Identifiable = GET_RESPONSE,
  CREATE_REQUEST = GET_RESPONSE,
  UPDATE_REQUEST = CREATE_REQUEST
> {
  readonly items: INDEX_RESPONSE[];

  readonly loading: boolean;

  readonly get: (id: number) => INDEX_RESPONSE | null;

  create(item: CREATE_REQUEST): Promise<GET_RESPONSE>;

  fetch(id: number): Promise<GET_RESPONSE>;

  fetchAll(): Promise<INDEX_RESPONSE[]>;

  remove(id: number): Promise<void>;

  update(data: { item: UPDATE_REQUEST; id: number }): Promise<GET_RESPONSE>;
}
