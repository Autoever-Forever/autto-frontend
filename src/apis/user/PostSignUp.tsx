import { instance } from 'apis/api';

export const PostSignUp = async (signData: FormData) => {
  try {
    const res = await instance.post('/auth/signup', signData);
    return res;
  } catch (err) {
    return err;
  }
};
