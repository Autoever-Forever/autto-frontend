import React, { useEffect } from 'react';
import {
  InfoLineBox,
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
import { useNavigate } from 'react-router-dom';
interface MypageListProps {
  index: number;
  reservationId: string;
  createdDate: string;
  ticketDate: string;
  title: string;
  status: string;
  thumbnailUrl: string;
}
function MypageList({
  index,
  reservationId,
  createdDate,
  title,
  ticketDate,
  status,
  thumbnailUrl,
}: MypageListProps) {
  const navigator = useNavigate();

  const formattedCreateDate = createdDate?.slice(0, 10) || '-';
  const formattedTicketDate = ticketDate?.slice(0, 10) || '-';
  const formattedTicketTime = ticketDate
    ? `${ticketDate.slice(11, 13)}시 ${ticketDate.slice(14, 16)}분`
    : '-';

  return (
    <Wrapper style={{ width: '80%' }}>
      <ReservationNumberBox index={index}>
        <ReservationNumber>예매번호 : {reservationId}</ReservationNumber>
        {status === 'ACTIVE' ? (
          <ReservationNumber
            color="var(--text-blue)"
            style={{ textAlign: 'right', cursor: 'pointer' }}
            onClick={() => navigator(`/cancel/${reservationId}`)}
          >
            예매 취소 &gt;
          </ReservationNumber>
        ) : (
          <ReservationNumber
            color="var(--text-red)"
            style={{ textAlign: 'right' }}
          >
            취소 완료
          </ReservationNumber>
        )}
      </ReservationNumberBox>
      <ReservationInfoBox>
        <PosterImg src={thumbnailUrl} />
        <TextInfoBox>
          <ProductTitle>{title}</ProductTitle>

          <InfoLineBox>
            <SubTitle>예매 일자 : &nbsp;</SubTitle>
            <SubTitle color="black">{formattedCreateDate}</SubTitle>
          </InfoLineBox>

          <InfoLineBox>
            <SubTitle>공연 일자 : &nbsp;</SubTitle>
            <SubTitle color="black">{formattedTicketDate}</SubTitle>
          </InfoLineBox>

          <InfoLineBox>
            <SubTitle>공연 시간 : &nbsp;</SubTitle>
            <SubTitle color="black">{formattedTicketTime}</SubTitle>
          </InfoLineBox>

          {/* <InfoLineBox>
            <SubTitle>예매 상태 : &nbsp;</SubTitle>
            <StateBox as="span" now={status == 'ACTIVE'}>
              {status == 'ACTIVE' ? '예매 완료' : '취소 완료'}
            </StateBox>
          </InfoLineBox> */}
        </TextInfoBox>
      </ReservationInfoBox>
    </Wrapper>
  );
}
export default MypageList;
