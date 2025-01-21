import { axiosPrivate } from 'apis/reservationApi';

export const PostReservationCancel = async (reservationId: string) => {
  try {
    const res = await axiosPrivate.delete(
      `/api/v1/reservation/${reservationId}`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
