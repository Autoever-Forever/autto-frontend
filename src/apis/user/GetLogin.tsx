import { instance } from 'apis/userApi';

export const GetLogin = async (id: string, password: string) => {
  try {
    const res = await instance.post('/sign-in', {
      email: id,
      password: password,
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
