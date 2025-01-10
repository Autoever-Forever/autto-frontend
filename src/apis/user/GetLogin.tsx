import { instance } from 'apis/api';
import axios from 'axios';

export const GetLogin = async (id: string, password: string) => {
  console.log(id, password);
  try {
    const res = await axios.post('9000/auth/sign-in', {
      email: id,
      password: password,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
