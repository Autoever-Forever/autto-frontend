import { instance } from 'apis/api';

export const PostEmailCheck = async (code: string) => {
  try {
    const res = await instance.post('/auth/verify-code');
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
