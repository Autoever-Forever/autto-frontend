import { axiosPrivate } from 'apis/api';

export const PostReservation = async (reservationInfo: FormData) => {
  try {
    const res = await axiosPrivate.post(`8081/reservation`, reservationInfo);

    return res.data;
  } catch (err) {
    return err;
  }
};
