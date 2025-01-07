import { create } from 'zustand';

interface Var {
  token: string;
  setToken: (value: string) => void;

  userName: string;
  setUserName: (value: string) => void;

  userEmail: string;
  setUserEmail: (value: string) => void;
}

const useInfo = create<Var>((set) => ({
  token: localStorage.getItem('token'),
  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  userName: localStorage.getItem('userName'),
  setUserName: (userName) => {
    localStorage.setItem('userName', userName);
  },

  userEmail: localStorage.getItem('userEmail'),
  setUserEmail: (userEmail) => {
    localStorage.setItem('userEmail', userEmail);
  },
}));

export default useInfo;
