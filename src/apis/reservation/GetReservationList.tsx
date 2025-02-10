// import { mockReservations } from 'mocks/mockData';
import { axiosPrivate } from 'apis/productApi';

export const GetReservation = async () => {
  // // mockReservations가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  // if (mockReservations?.length > 0) {
  //   const formattedReservations = mockReservations.map(reservation => ({
  //     reservationId: reservation.id,
  //     title: reservation.title,
  //     createdDate: reservation.createdAt,
  //     ticketDate: reservation.reservationDate,
  //     status: reservation.status,
  //     thumbnailUrl: reservation.posterUrl
  //   }));
  //
  //   return {
  //     data: formattedReservations
  //   };
  // }

  // Mock 데이터가 없는 경우 실제 API 호출
  try {
    const res = await axiosPrivate.get(`/mypage/reservation`);
    
    if (!res.data || !res.data.data) {
      return { data: [] };
    }

    const formattedReservations = res.data.data.map((reservation: any) => ({
      reservationId: reservation.id,
      title: reservation.title,
      createdDate: reservation.createdAt,
      ticketDate: reservation.reservationDate,
      status: reservation.status,
      thumbnailUrl: reservation.posterUrl
    }));

    return {
      data: formattedReservations
    };
  } catch (err) {
    console.error('예약 목록 조회 실패:', err);
    throw new Error('예약 목록을 불러오는데 실패했습니다.');
  }
};
