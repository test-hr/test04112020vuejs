import { ApiBase } from '@/shared/api/ApiBase';
import { CrudApi } from '@/shared/api/crud_api/CrudApi';
import { AxiosInstance } from 'axios';

export abstract class CrudApiImpl<
    T_RESPONSE,
    L = T_RESPONSE,
    C = T_RESPONSE,
    U = C
  >
  extends ApiBase
  implements CrudApi<T_RESPONSE, L, C, U> {
  // protected in signature of constructor automatically creates an instance variable -> axios
  protected constructor(
    protected axios: AxiosInstance,
    protected path: string,
  ) {
    super(axios);
    if (!path) {
      throw new Error('Path is missing');
    }
  }

  async index(): Promise<L[]> {
    const response = await this.axios.get(`${this.path}`);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    return this.axios.delete(`${this.path}/${id}`);
  }

  async get(id: number): Promise<T_RESPONSE> {
    const response = await this.axios.get(`${this.path}/${id}`);
    return response.data;
  }

  async patch(item: U, id: number): Promise<T_RESPONSE> {
    const response = await this.axios.patch(`${this.path}/${id}`, item);
    return response.data;
  }

  async post(item: C): Promise<T_RESPONSE> {
    const response = await this.axios.post(`${this.path}`, item);
    return response.data;
  }
}
