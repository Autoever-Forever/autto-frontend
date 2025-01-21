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
  token: sessionStorage.getItem('token'),
  setToken: (token) => {
    set({ token: token });
    sessionStorage.setItem('token', token);
  },

  userName: sessionStorage.getItem('userName'),
  setUserName: (userName) => {
    set({ userName: userName });
    sessionStorage.setItem('userName', userName);
  },

  userEmail: sessionStorage.getItem('userEmail'),
  setUserEmail: (userEmail) => {
    set({ userEmail: userEmail });
    sessionStorage.setItem('userEmail', userEmail);
  },
}));

export default useInfo;
