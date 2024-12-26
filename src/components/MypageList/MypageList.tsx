import { Wrapper } from 'components/LoginForm/LoginFormStyle';
import React from 'react';
import {
  PosterImg,
  ProductTitle,
  ProductTitleBox,
  ReservationInfoBox,
  ReservationNumber,
  ReservationNumberBox,
  StateBox,
  SubTitle,
  TextInfoBox,
} from './MypageListStyle';
interface MypageListProps {
  reservationNumber: string;
  title: string;
  state: string;
  reservationDate: string;
  productDate: string;
}
function MypageList({
  reservationNumber,
  title,
  state,
  reservationDate,
  productDate,
}: MypageListProps) {
  return (
    <Wrapper>
      <ReservationNumberBox>
        <ReservationNumber>예매번호 : {reservationNumber}</ReservationNumber>
        <ReservationNumber style={{ textAlign: 'right' }}>
          예매 취소 &gt;
        </ReservationNumber>
      </ReservationNumberBox>
      <ReservationInfoBox>
        <PosterImg />
        <TextInfoBox>
          <ProductTitleBox>
            <ProductTitle>{title}</ProductTitle>
            <StateBox>{state}</StateBox>
          </ProductTitleBox>
          <SubTitle>예약 일자 : {reservationDate}</SubTitle>
          <SubTitle>공연 일자 : {productDate}</SubTitle>
        </TextInfoBox>
      </ReservationInfoBox>
    </Wrapper>
  );
}
export default MypageList;
