import { axiosPrivate } from 'apis/productApi';

// 개인 에약 내역 조회
export const GetReservation = async () => {
  try {
    const res = await axiosPrivate.get(`/mypage/reservation`);

    if (!res.data || !res.data.data) {
      return { data: [] };
    }

    // API 응답 데이터를 올바른 속성 이름으로 매핑
    const formattedReservations = res.data.data.map((reservation: any) => ({
      reservationId: reservation.reservationId,
      title: reservation.title,
      createdDate: reservation.createdDate,
      ticketDate: reservation.ticketDate,
      status: reservation.status,
      thumbnailUrl: reservation.thumbnailUrl
    }));

    return {
      data: formattedReservations
    };
  } catch (err) {
    console.error('예약 목록 조회 실패:', err);
    throw new Error('예약 목록을 불러오는데 실패했습니다.');
  }
};
