import { instance } from 'apis/userApi';

export const PostEmail = async (email: string) => {
  try {
    const res = await instance.post(`/send-verification?email=${email}`);
    
    if (!res.data) {
      throw new Error('이메일 전송에 실패했습니다.');
    }

    return {
      result: true,
      data: res.data.data
    };
  } catch (err) {
    console.error('이메일 전송 실패:', err);
    throw new Error('이메일 전송에 실패했습니다.');
  }
};
