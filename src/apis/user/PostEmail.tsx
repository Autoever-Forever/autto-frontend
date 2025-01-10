import { instance } from 'apis/api';

export const PostEmail = async (email: string) => {
  try {
    const res = await instance.post(`9000/auth/send-verification`, {
      email: email,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
