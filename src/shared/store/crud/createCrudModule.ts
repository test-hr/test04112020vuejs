import Vue from 'vue';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { Store } from 'vuex';
import { CrudApi } from '@/shared/api/crud_api/CrudApi';
import { CrudModule } from '@/shared/store/crud/CrudModule';
import { Identifiable } from '@/shared/store/crud/Identifiable';
import { CrudModuleMutations } from '@/shared/store/crud/CrudModuleMutations';
import { Modules } from '@/store/Modules';

interface CrudModuleClassImpl<
  D extends Identifiable,
  L extends Identifiable = D,
  C = D,
  U = C
> extends CrudModule<D, L, C, U>,
    CrudModuleMutations<L>,
    VuexModule {}

// tslint:disable-next-line:max-line-length

const createCrudModule: <
  D extends Identifiable,
  L extends Identifiable = D,
  C = D,
  U = C
>(
  store: Store<{}>,
  api: CrudApi<D, L, C, U>,
  name: Modules,
) => new () => CrudModuleClassImpl<D, L, C, U> = <
  D extends Identifiable,
  L extends Identifiable = D,
  C = D,
  U = C
>(
  store: Store<{}>,
  api: CrudApi<D, L, C, U>,
  name: Modules,
) => {
  class CrudModuleClass
    extends VuexModule
    implements CrudModule<D, L, C, U>, CrudModuleMutations<L> {
    items: L[] = [];

    vue = new Vue();

    loading = false;

    @Mutation
    setLoading(loading: boolean) {
      this.loading = loading;
    }

    @Mutation
    setAllItems(items: L[]) {
      this.items = items;
    }

    @Mutation
    setItem(item: L) {
      const index = this.items.findIndex((q) => q.id === item.id);
      if (index === -1) {
        this.items = [...this.items, item];
      } else {
        this.items.splice(index, 1, item);
      }
    }

    @Mutation
    removeItem(id: number) {
      const index = this.items.findIndex((q) => q.id === id);
      if (index === -1) {
        return;
      }
      this.items.splice(index, 1);
    }

    @Mutation
    addItems(items: L[]) {
      const newItems = items.filter(
        (i) => !this.items.map((it) => it.id).includes(i.id),
      );
      this.items = [...this.items, ...newItems];
    }

    get get() {
      return (id: number) =>
        this.items.find((i) => String(i.id) === String(id)) || null;
    }

    @Action({ rawError: true })
    async create(item: C): Promise<D> {
      try {
        const response = await api.post(item);
        this.setItem((response as any) as L);
        return response;
      } catch (e) {
        this.vue.$toasted.error(`Error: ${e.response.data.message}`);
        console.log({ e });
        throw e;
      }
    }

    @Action({ rawError: true })
    async fetch(id: number): Promise<D> {
      try {
        const response = await api.get(id);
        this.setItem((response as any) as L);
        return response;
      } catch (e) {
        console.error(e);
        throw e;
      }
    }

    @Action({ rawError: true })
    async fetchAll(): Promise<L[]> {
      this.setLoading(true);
      try {
        const response = await api.index();
        this.setAllItems(response);
        return response;
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        this.setLoading(false);
      }
    }

    @Action({ rawError: true })
    async remove(id: number): Promise<void> {
      this.setLoading(true);
      try {
        await api.delete(id);
        this.removeItem(id);
      } catch (e) {
        this.vue.$toasted.error(`Error: ${e.response.data.message}`);
        console.error(e);
        throw e;
      }
      this.setLoading(false);
    }

    @Action({ rawError: true })
    async update({ item, id }: { item: U; id: number }): Promise<D> {
      try {
        const response = await api.patch(item, id);
        this.setItem((response as any) as L);
        return response;
      } catch (e) {
        this.vue.$toasted.error(`Error: ${e.response.data.message}`);
        console.error(e);
        throw e;
      }
    }
  }

  const decorator = Module({
    store,
    name: `${name}_base`,
    dynamic: true,
    namespaced: true,
  });

  return (decorator(
    CrudModuleClass,
  ) as unknown) as new () => CrudModuleClassImpl<D, L, C, U>;
};

// tslint:disable-next-line
export { createCrudModule };
