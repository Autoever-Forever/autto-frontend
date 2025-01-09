import { create } from 'zustand';

interface ProductProps {
  uuid: string;
  setUuid: (value: string) => void;

  selectDate: string;
  setSelectDate: (value: string) => void;
}

const useProducts = create<ProductProps>((set) => ({
  uuid: sessionStorage.getItem('uuid'),
  setUuid: (value: string) => {
    set({ selectDate: value });
    sessionStorage.setItem('uuid', value);
  },
  selectDate: sessionStorage.getItem('date'),
  setSelectDate: (value: string) => {
    set({ selectDate: value });
    sessionStorage.setItem('date', value);
  },
}));

export default useProducts;
