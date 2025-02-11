import { axiosPrivate } from "apis/productApi";
// import { mockReservationDetails } from "mocks/mockData";

// 예약 취소 상세 조회 
export const GetReservationCancel = async (reservationId: string) => {
  // 테스트 데이터 체크
  // const mockDetail = mockReservationDetails[reservationId];
  // if (mockDetail) {
  //   return {
  //     result: true,
  //     data: mockDetail
  //   };
  // }

  // 실제 API 호출
  try {
    const res = await axiosPrivate.get(
      `/mypage/reservation/cancel/${reservationId}`,
    );
    
    if (!res.data || !res.data.data) {
      return { data: null };
    }

    return {
      result: true,
      data: res.data.data
    };
  } catch (err) {
    console.error('예약 취소 조회 실패:', err);
    throw new Error('예약 취소 정보를 불러오는데 실패했습니다.');
  }
};
