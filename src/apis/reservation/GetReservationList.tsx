import { axiosPrivate } from 'apis/productApi';

// 개인 에약 내역 조회
export const GetReservation = async () => {
  try {
    const res = await axiosPrivate.get(`/mypage/reservation`);

    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};
