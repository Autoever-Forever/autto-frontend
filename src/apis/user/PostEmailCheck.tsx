import { instance } from 'apis/userApi';

export const PostEmailCheck = async (email: string, code: string) => {
  try {
    const res = await instance.post(
      `/verify-code?email=${email}&verificationCode=${code}`,
    );

    if (!res.data) {
      throw new Error('인증 코드 확인에 실패했습니다.');
    }

    return {
      result: true,
      data: res.data.data
    };
  } catch (err) {
    console.error('인증 코드 확인 실패:', err);
    throw new Error('인증 코드 확인에 실패했습니다.');
  }
};
