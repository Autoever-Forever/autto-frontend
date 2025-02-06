import { instance } from 'apis/userApi';

export const PostEmail = async (email: string) => {
  try {
    const res = await instance.post(`auth/send-verification?email=${email}`);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};
