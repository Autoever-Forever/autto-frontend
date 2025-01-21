import React, { useEffect } from 'react';
import {
  PosterImg,
  ProductTitle,
  ReservationInfoBox,
  ReservationNumber,
  ReservationNumberBox,
  StateBox,
  SubTitle,
  TextInfoBox,
} from './MypageListStyle';
import { Wrapper } from 'components/CommonStyle';
import poster from 'assets/poster.png';
import { useNavigate } from 'react-router-dom';
interface MypageListProps {
  index: number;
  reservationNumber: string;
  createDate: string;
  ticketDate: string;
  title: string;
  state: string;
  thumnailUrl: string;
}
function MypageList({
  index,
  reservationNumber,
  createDate,
  title,
  ticketDate,
  state,
  thumnailUrl,
}: MypageListProps) {
  const navigator = useNavigate();
  const onClick = () => {};

  return (
    <Wrapper style={{ width: '80%' }}>
      <ReservationNumberBox index={index}>
        <ReservationNumber>예매번호 : {reservationNumber}</ReservationNumber>
        {state === 'ACTIVE' ? (
          <ReservationNumber
            color="var(--text-red)"
            style={{ textAlign: 'right', cursor: 'pointer' }}
            onClick={() => navigator(`/cancel/${reservationNumber}`)}
          >
            예매 취소 &gt;
          </ReservationNumber>
        ) : null}
      </ReservationNumberBox>
      <ReservationInfoBox>
        <PosterImg src={poster} />
        <TextInfoBox>
          <ProductTitle>{title}</ProductTitle>

          {/* <SubTitle>
            예매 일자 : &nbsp;
            <SubTitle color="black">{createDate.slice(0, 10)}</SubTitle>
          </SubTitle> */}

          <SubTitle>
            공연 일자 : &nbsp;
            <SubTitle color="black">{ticketDate.slice(0, 10)}</SubTitle>
          </SubTitle>

          <SubTitle>
            공연 시간 : &nbsp;
            <SubTitle color="black">
              {ticketDate.slice(11, 13)}시 {ticketDate.slice(14, 16)}분
            </SubTitle>
          </SubTitle>

          <SubTitle>
            예매 상태 : &nbsp;
            <StateBox as="span" now={state == 'ACTIVE'}>
              {state == 'ACTIVE' ? '예매 완료' : '취소 완료'}
            </StateBox>
          </SubTitle>
        </TextInfoBox>
      </ReservationInfoBox>
    </Wrapper>
  );
}
export default MypageList;
