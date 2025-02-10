import { axiosPrivate } from 'apis/reservationApi';
// import { mockReservationDetails } from 'mocks/mockData';

export const PostReservationCancel = async (reservationId: string) => {
  // // 테스트 데이터 체크
  // const mockDetail = mockReservationDetails[reservationId];
  // if (mockDetail) {
  //   // 테스트용 예약 취소 처리
  //   mockDetail.status = "CANCELLED";
  //   return {
  //     success: true,
  //     data: mockDetail
  //   };
  // }

  // 실제 API 호출
  try {
    const res = await axiosPrivate.delete(
      `/v1/reservation/${reservationId}`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
