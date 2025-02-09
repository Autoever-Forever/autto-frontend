import { axiosPrivate } from "apis/productApi";
import { mockReservationDetails } from "mocks/mockData";

export const GetReservationCancel = async (reservationId: string) => {
  // 테스트 데이터 체크
  const mockDetail = mockReservationDetails[reservationId];
  if (mockDetail) {
    return {
      result: true,
      data: mockDetail
    };
  }

  // 실제 API 호출
  try {
    const res = await axiosPrivate.get(
      `/mypage/reservation/cancel/${reservationId}`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
