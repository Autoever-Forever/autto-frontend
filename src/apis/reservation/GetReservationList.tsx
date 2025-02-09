import { mockReservations } from 'mocks/mockData';
import { axiosPrivate } from 'apis/productApi';

export const GetReservation = async () => {
  // mockReservations가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  if (mockReservations?.length > 0) {
    return {
      data: mockReservations
    };
  }

  // Mock 데이터가 없는 경우 실제 API 호출
  try {
    const res = await axiosPrivate.get(`mypage/reservation`);
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};
