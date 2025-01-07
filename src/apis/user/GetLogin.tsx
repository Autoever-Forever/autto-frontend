import { instance } from 'apis/api';

export const GetLogin = async (id: string, password: string) => {
  try {
    const res = await instance.post('/auth/sign-in', {
      id: id,
      password: password,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
