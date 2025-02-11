import { instance } from 'apis/userApi';

export const PostSignUp = async (
  name: string,
  emailId: string,
  emailCode: string,
  userPassword: string,
  userPasswordCheck: string,
) => {
  try {
    const res = await instance.post('/signup', {
      name: name,
      email: emailId,
      verificationCode: emailCode,
      userPw: userPassword,
      confirmPassword: userPasswordCheck,
    });

    if (!res.data) {
      throw new Error('회원가입에 실패했습니다.');
    }

    return {
      result: true,
      data: res.data.data
    };
  } catch (err) {
    console.error('회원가입 실패:', err);
    throw new Error('회원가입에 실패했습니다.');
  }
};
