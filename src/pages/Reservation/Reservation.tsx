import React from 'react';
import {
  Button,
  ButtonBox,
  ReservationBox,
  SubInfo,
  Title,
  Wrapper,
} from './ResercationStyle';
import Calendar from 'components/Reservation/Calendar/Calendar';
import Select from 'components/Reservation/Select/Select';

function Reservation() {
  const submitHandler = () => {
    // 예약 정보 전성하는 api 연결
    console.log('예약 완료');
  };
  return (
    <Wrapper>
      <Title>뮤지컬 [시라노]</Title>
      <SubInfo>예술의 전당 CJ 토월 극장 | 2024.12.03 ~ 2025.02.23</SubInfo>
      <ReservationBox>
        <Calendar />
        <Select />
      </ReservationBox>

      <ButtonBox>
        <Button onClick={submitHandler}>예약하기</Button>
      </ButtonBox>
    </Wrapper>
  );
}

export default Reservation;
