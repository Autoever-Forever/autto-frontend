import { axiosPrivate } from 'apis/reservationApi';

export const PostReservation = async (reservationInfo: FormData) => {
  try {
    const res = await axiosPrivate.post(`api/v1/reservation`, reservationInfo);

    return res.data;
  } catch (err) {
    return err;
  }
};
