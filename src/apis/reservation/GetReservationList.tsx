import { axiosPrivate } from 'apis/api';

export const GetReservation = async () => {
  try {
    const res = await axiosPrivate.get(`/mypage/reservation`);
    return res.data;
  } catch (err) {
    return err;
  }
};
