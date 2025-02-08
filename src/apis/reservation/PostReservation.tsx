import { axiosPrivate } from 'apis/reservationApi';

// 공연 예약 생성
export const PostReservation = async (reservationInfo: FormData) => {
  console.log(reservationInfo);
  try {
    const res = await axiosPrivate.post(`/v1/reservation`, reservationInfo);

    return res.data;
  } catch (err) {
    return err;
  }
};
