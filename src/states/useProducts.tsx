import { create } from 'zustand';

interface ProductProps {
  uuid: string;
  setUuid: (value: string) => void;
}

const useProducts = create<ProductProps>((set) => ({
  uuid: sessionStorage.getItem('uuid'),
  setUuid: (value: string) => {
    sessionStorage.setItem('uuid', value);
  },
}));

export default useProducts;
