import { create } from 'zustand';

interface Var {
  token: string;
  setToken: (value: string) => void;

  userName: string;
  setUserName: (value: string) => void;
}

const useToken = create<Var>((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  userName: localStorage.getItem('userName'),
  setUserName: (userName) => {
    localStorage.setItem('userName', userName);
  },
}));

export default useToken;
