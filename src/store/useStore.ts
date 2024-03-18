import { create } from "zustand";
import { getPageFromQuery } from "../helpers/getPageFromQuery";

export interface ProductsType {
  id: number;
  color: string;
  name: string;
  pantone_value: string;
  year: number;
}

interface AppStore {
  page: number;
  products: ProductsType[] | undefined;
  productId: number | undefined;
  setPage: (givenPage: number) => void;
  setProducts: (products: ProductsType[]) => void;
  setProductId: (givenId: number) => void;
}

export const useStore = create<AppStore>()((set) => ({
  page: getPageFromQuery().page,
  products: undefined,
  productId: getPageFromQuery().id,

  setProductId: (givenId) => set(() => ({ productId: givenId })),
  setPage: (givenPage) => set(() => ({ page: givenPage })),
  setProducts: (products) => set(() => ({ products: products })),
}));
