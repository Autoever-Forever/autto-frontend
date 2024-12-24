import { create } from 'zustand';

interface Var {
  token: string;
}

const Variable = create<Var>((set) => ({
  token: 'token',
}));

export default Variable;
