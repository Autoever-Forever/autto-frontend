import { axiosPrivate } from "apis/productApi";

// 예약 취소 상세 조회 
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
