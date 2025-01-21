import { create } from 'zustand';

interface ProductProps {
  uuid: string;
  setUuid: (value: string) => void;

  title: string;
  setTitle: (value: string) => void;

  selectDate: string;
  setSelectDate: (value: string) => void;

  seatCnt: number;
  setSeatCnt: (value: number) => void;

  success: string;
  setSuccess: (value: string) => void;
}

const useProducts = create<ProductProps>((set) => ({
  uuid: sessionStorage.getItem('uuid'),
  setUuid: (value: string) => {
    set({ uuid: value });
    sessionStorage.setItem('uuid', value);
  },
  title: sessionStorage.getItem('title'),
  setTitle: (value: string) => {
    set({ title: value });
    sessionStorage.setItem('title', value);
  },
  selectDate: sessionStorage.getItem('date'),
  setSelectDate: (value: string) => {
    set({ selectDate: value });
    sessionStorage.setItem('date', value);
  },
  seatCnt: parseInt(sessionStorage.getItem('seatCnt')),
  setSeatCnt: (value: number) => {
    set({ seatCnt: value });
    sessionStorage.setItem('seatCnt', value.toString());
  },
  success: sessionStorage.getItem('success'),
  setSuccess: (value: string) => {
    set({ success: value });
    sessionStorage.setItem('success', value);
  },
}));

export default useProducts;
