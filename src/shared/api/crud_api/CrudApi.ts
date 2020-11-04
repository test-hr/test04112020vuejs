/**
 * RESPONSE: full response type including all details and subfields, returned when getting a single item
 * L: list response type, returned when getting items via index call (defaults to D)
 * C: create request type (defaults to D)
 * U: update request type (defaults to C)
 */
export interface CrudApi<T_RESPONSE, L = T_RESPONSE, C = T_RESPONSE, U = C> {
  index(): Promise<L[]>;

  get(id: number): Promise<T_RESPONSE>;

  patch(item: U, id: number): Promise<T_RESPONSE>;

  post(item: C): Promise<T_RESPONSE>;

  delete(id: number): Promise<void>;
}
