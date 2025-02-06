import { axiosPrivate } from "apis/productApi";

export const GetReservationCancel = async (reservationId: string) => {
  console.log('api token: ', reservationId);
  try {
    const res = await axiosPrivate.get(
      `/mypage/reservation/cancel/${reservationId}`,
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
