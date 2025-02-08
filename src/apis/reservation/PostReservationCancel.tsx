import { axiosPrivate } from 'apis/reservationApi';

// 예약 취소하기
export const PostReservationCancel = async (reservationId: string) => {
  try {
    const res = await axiosPrivate.delete(
      `/v1/reservation/${reservationId}`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
