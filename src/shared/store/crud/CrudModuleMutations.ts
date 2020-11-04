export interface CrudModuleMutations<L> {
  setLoading(loading: boolean): void;

  setAllItems(items: L[]): void;

  setItem(item: L): void;

  removeItem(id: number): void;

  addItems(items: L[]): void;
}
