import { instance } from 'apis/userApi';

export const PostEmailCheck = async (email: string, code: string) => {
  try {
    const res = await instance.post(
      `/verify-code?email=${email}&verificationCode=${code}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
