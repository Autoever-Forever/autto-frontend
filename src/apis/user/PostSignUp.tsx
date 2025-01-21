import { instance } from 'apis/userApi';

export const PostSignUp = async (
  name: string,
  emailId: string,
  emailCode: string,
  userPassword: string,
  userPasswordcheck: string,
) => {
  try {
    const res = await instance.post('auth/signup', {
      name: name,
      email: emailId,
      verificationCode: emailCode,
      userPw: userPassword,
      confirmPassword: userPasswordcheck,
    });

    return res.data;
  } catch (err) {
    return err;
  }
};
