import { instance } from 'apis/userApi';
// import { mockUser } from 'mocks/mockData';

export const GetLogin = async (id: string, password: string) => {
  // // 테스트 계정 체크
  // if (id === "test@example.com" && password === "password") {
  //   // 세션 스토리지에 사용자 정보 저장
  //   sessionStorage.setItem('token', mockUser.accessToken);
  //   sessionStorage.setItem('userName', mockUser.name);
  //   sessionStorage.setItem('userEmail', mockUser.email);
  //
  //   return {
  //     result: true,
  //     data: {
  //       accessToken: mockUser.accessToken,
  //       name: mockUser.name,
  //       email: mockUser.email
  //     }
  //   };
  // }

  // 실제 로그인 API 호출
  try {
    const res = await instance.post('/sign-in', {
      email: id,
      password: password,
    });

    if (!res.data || !res.data.success) {
      throw new Error('로그인에 실패했습니다.');
    }

    // 세션 스토리지에 사용자 정보 저장
    const userData = res.data.data;
    sessionStorage.setItem('token', userData.accessToken);
    sessionStorage.setItem('userName', userData.name);
    sessionStorage.setItem('userEmail', userData.email);

    return {
      result: true,
      data: {
        accessToken: userData.accessToken,
        name: userData.name,
        email: userData.email
      }
    };
  } catch (err) {
    console.error('로그인 실패:', err);
    throw new Error('로그인에 실패했습니다.');
  }
};
