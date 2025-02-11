import { useQuery } from '@tanstack/react-query';
import { GetReservation } from 'apis/reservation/GetReservationList';
import { Title, Wrapper } from 'components/CommonStyle';
import MypageList from 'components/MypageList/MypageList';
import React, { useEffect, useState } from 'react';

function Mypage() {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    const GetMyList = async () => {
      try {
        const res = await GetReservation();
        setReservationList(res.data);
      } catch (err) {
        return alert('없음');
      }
    };
    GetMyList();
  }, []);

  console.log(reservationList);
  return (
    <Wrapper>
      <Title>예약 확인</Title>
      {reservationList ? (
        <>
          {reservationList.map((data, ind) => {
            return (
              <MypageList
                key={ind}
                index={ind}
                reservationId={data.reservationId}
                createdDate={data.createdDate}
                ticketDate={data.ticketDate}
                status={data.status}
                title={data.title}
                thumbnailUrl={data.thumbnailUrl}
              />
            );
          })}
        </>
      ) : null}
    </Wrapper>
  );
}

export default Mypage;
