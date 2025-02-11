import React, { useEffect, useState } from 'react';
import { ButtonBox, ReservationBox, SubInfo, Title, PageWrapper, LoadingWrapper, ErrorWrapper } from './ReservationStyle';
import Calendar from 'components/Reservation/Calendar/Calendar';
import Select from 'components/Reservation/Select/Select';
import { Button } from 'components/CommonStyle';
import { useQuery } from '@tanstack/react-query';
import useProducts from 'states/useProducts';
import { GetInventoryProduct } from 'apis/product/GetInventoryProduct';
import { PostReservation } from 'apis/reservation/PostReservation';
import { useNavigate } from 'react-router-dom';

function Reservation() {
  const navigator = useNavigate();
  const { uuid, setSuccess, setTitle, setSeatCnt } = useProducts();
  const reservationInfo = new FormData();
  const [totalSelect, setTotalSelect] = useState(0);
  const [seatId, setSeatId] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['dates', uuid],
    queryFn: () => GetInventoryProduct(uuid),
    enabled: !!uuid,
  });

  console.log('Reservation Query:', { data, isLoading, error, uuid });

  const submitHandler = async () => {
    // 예약 정보 전송하는 api 연결
    const postMyReservation = async (reservationInfo: FormData) => {
      try {
        const res = await PostReservation(reservationInfo);
        console.log('post reservation', res);

        if (res) {
          setTitle(data.data[0].title);
          return setSeatCnt(totalSelect);
        }
      } catch (err) {
        console.log(err);
        return alert('에약에 실패하였습니다.');
      }
    };
    // 예약 정보 request 생성
    reservationInfo.append('productId', uuid);
    reservationInfo.append('seatId', seatId);
    reservationInfo.append('seatCount', totalSelect.toString());

    // 예약 요청
    try {
      const res = postMyReservation(reservationInfo);
      if (res) {
        alert('예약이 완료되었습니다.');
        setSuccess('reservation');
        return navigator('/success');
      }
    } catch (err) {
      return err;
    }
  };

  if (isLoading) {
    return (
      <LoadingWrapper>
        데이터를 불러오는 중입니다...
      </LoadingWrapper>
    );
  }

  if (error) {
    console.error('Reservation Error:', error);
    return (
      <ErrorWrapper>
        죄송합니다. 오류가 발생했습니다.
      </ErrorWrapper>
    );
  }

  if (!data?.data?.[0]) {
    return (
      <ErrorWrapper>
        죄송합니다. 예매 정보를 찾을 수 없습니다.
      </ErrorWrapper>
    );
  }

  const productData = data.data[0];
  const startDate = new Date(productData.performStartDate).toLocaleDateString();
  const endDate = new Date(productData.performEndDate).toLocaleDateString();

  return (
    <PageWrapper>
      <Title>{productData.title}</Title>
      <SubInfo>
        {productData.location} | {startDate} ~ {endDate}
      </SubInfo>
      
      <ReservationBox>
        <Calendar />
        <Select
          totalSelect={totalSelect}
          setTotalSelect={setTotalSelect}
          seatId={seatId}
          setSeatId={setSeatId}
        />

        <ButtonBox>
          <Button onClick={() => navigator(-1)}>뒤로가기</Button>
          <Button onClick={submitHandler}>예매하기</Button>
        </ButtonBox>
      </ReservationBox>
    </PageWrapper>
  );
}

export default Reservation;
