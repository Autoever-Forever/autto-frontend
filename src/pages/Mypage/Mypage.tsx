import { useQuery } from '@tanstack/react-query';
import { GetReservation } from 'apis/reservation/GetReservationList';
import { Title, Wrapper } from 'components/CommonStyle';
import MypageList from 'components/MypageList/MypageList';
import React, { useEffect, useState } from 'react';

function Mypage() {
  const [reservationList, setReservationList] = useState([]);
  const { data } = useQuery({
    queryKey: ['reservations'],
    queryFn: () => GetReservation(),
  });
  const tempData = [
    {
      reservationId: 'ddf379cc-cd8e-11ef-921c-0242ac110002',
      seatId: '52a602d5-cd8d-11ef-921c-0242ac110002',
      createdDate: '2024-12-05T16:01:00',
      ticketDate: '2025-01-05T14:30:00',
      status: 'ACTIVE',
      title: 'New Year Concert',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    },
    {
      reservationId: 'ddf379cc-cd8e-11ef-921c-0242ac110002',
      seatId: '52a602d5-cd8d-11ef-921c-0242ac110002',
      createdDate: '2024-12-05T16:01:00',
      ticketDate: '2025-01-05T14:30:00',
      status: 'ACTIVE',
      title: 'New Year Concert',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    },
    {
      reservationId: 'ddf379cc-cd8e-11ef-921c-0242ac110002',
      seatId: '52a602d5-cd8d-11ef-921c-0242ac110002',
      createdDate: '2024-12-05T16:01:00',
      ticketDate: '2025-01-05T14:30:00',
      status: 'ACTIVE',
      title: 'New Year Concert',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    },
    {
      reservationId: 'ddf379cc-cd8e-11ef-921c-0242ac110002',
      seatId: '52a602d5-cd8d-11ef-921c-0242ac110002',
      createdDate: '2024-12-05T16:01:00',
      ticketDate: '2025-01-05T14:30:00',
      status: 'ACTIVE',
      title: 'New Year Concert',
      thumbnailUrl: 'https://example.com/thumbnail1.jpg',
    },
  ];

  useEffect(() => {
    // 사용자 에약 내역 조회하는 api 연결
  }, []);

  const cancelHandler = () => {
    // 예약 취소하는 api 연결
    console.log('cancel ticket');
  };


  return (
    <Wrapper>
      <Title>예약 확인</Title>

      {tempData.map((data, ind) => {
        return (
          <MypageList
            key={ind}
            index={ind}
            reservationNumber={data.reservationId}
            createDate={data.createdDate}
            ticketDate={data.ticketDate}
            state={data.status}
            title={data.title}
            thumnailUrl={data.thumbnailUrl}
          />
        );
      })}
    </Wrapper>
  );
}

export default Mypage;
