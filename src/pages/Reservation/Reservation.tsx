import React, { useEffect, useState } from 'react';
import { ButtonBox, ReservationBox, SubInfo } from './ReservationStyle';
import Calendar from 'components/Reservation/Calendar/Calendar';
import Select from 'components/Reservation/Select/Select';
import { Button, Title, Wrapper } from 'components/CommonStyle';
import { QueryClient, useQuery } from '@tanstack/react-query';
import useProducts from 'states/useProducts';
import { GetInventroyProduct } from 'apis/product/GetInventroyProduct';
import { PostReservation } from 'apis/reservation/PostReservation';
import { useNavigate } from 'react-router-dom';

function Reservation() {
  const navigator = useNavigate();
  const queryClient = new QueryClient();
  const { uuid, setSuccess, setTitle, setSeatCnt } = useProducts();
  const reservationInfo = new FormData();
  const [totalSelect, setTotalSelect] = useState(0);
  const [seatId, setSeatId] = useState('');

  const { data } = useQuery({
    queryKey: ['dates'],
    queryFn: () => GetInventroyProduct(uuid),
  });

  useEffect(() => {
    GetInventroyProduct(uuid);
  }, []);

  const submitHandler = () => {
    // 예약 정보 전송하는 api 연결
    const postReservation = async (reservationInfo: FormData) => {
      try {
        const res = await PostReservation(reservationInfo);

        if (res) {
          setTitle(data.date[0].title);
          setSeatCnt(totalSelect);
          setSuccess('reservation');
          navigator('/success');
        }
      } catch (err) {
        alert('에약에 실패하였습니다.');
      }
    };
    // 예약 정보 request 생성
    reservationInfo.append('productId', uuid);
    reservationInfo.append('seatId', seatId);
    reservationInfo.append('seatCount', totalSelect.toString());

    // 예약 요청
    try {
      const res = postReservation(reservationInfo);
      if (res) {
        alert('예약이 완료되었습니다.');
        // 완료페이지로 이동
      } else {
        return alert('예약에 실패하였습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <Wrapper>
      {data ? (
        <>
          <Title text_align="start" width="80%">
            {data.data[0].title}
          </Title>
          <SubInfo>
            {data.data[0].location} |{' '}
            {data.data[0].performStartDate.slice(0, 10)} ~
            {data.data[0].performEndDate.slice(0, 10)}
          </SubInfo>
          <ReservationBox>
            <Calendar />
            <Select
              totalSelect={totalSelect}
              setTotalSelect={setTotalSelect}
              seatId={seatId}
              setSeatId={setSeatId}
            />
          </ReservationBox>

          <ButtonBox>
            <Button onClick={submitHandler} width="30%" status>
              예약하기
            </Button>
          </ButtonBox>
        </>
      ) : null}
    </Wrapper>
  );
}

export default Reservation;
