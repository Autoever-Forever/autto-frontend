import { axiosPrivate } from 'apis/api';

export const GetReservation = async () => {
  try {
    const res = await axiosPrivate.get(`8080/mypage/reservation`);
    return res.data;
  } catch (err) {
    return err;
  }
};
