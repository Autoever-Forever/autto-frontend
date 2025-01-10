import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  Title,
  LabelWrapper,
  Text,
} from '../../components/DetailProduct/DetailProductStyle';
import poster from 'assets/poster.png';
import { Button, Wrapper } from 'components/CommonStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { GetReservationCancel } from 'apis/reservation/GetReservationCancel';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { PostReservationCancel } from 'apis/reservation/PostReservationCancel';

function ReservationCacelPage() {
  const { reservationId } = useParams();
  const navigator = useNavigate();
  const { data } = useQuery({
    queryKey: ['cancel'],
    queryFn: () => GetReservationCancel(reservationId),
  });

  const onClick = () => {
    const res = PostReservationCancel(reservationId);
    if (res) {
      // 예매 취소 완료인 상태
      navigator('/');
    } else {
      alert('예매를 취소하지 못했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Wrapper>
      {data ? (
        <>
          <Title>{data.title}</Title>
          <InfoWrapper>
            <Poster src={poster} />
            <InfoBox>
              <LabelWrapper>
                <Text width="30%">장소</Text>
                <Text width="60%">{data.location}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 일자</Text>
                <Text width="60%">
                  {moment(data.ticketDate).format('YYYY.MM.DD')}
                </Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 시간</Text>
                <Text width="60%">{data.runningTime}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">가격</Text>
                <Text width="60%">{data.price}</Text>
              </LabelWrapper>

              <LabelWrapper color="var(--text-red)">
                <Text width="30%">예매 취소 매수</Text>
                <Text width="60%">{data.seatCount}매</Text>
              </LabelWrapper>

              <LabelWrapper color="var(--text-red)">
                <Text width="30%">예매 취소 매수</Text>
                <Text width="60%">{data.seatPrice}원</Text>
              </LabelWrapper>

              <Button
                status={data.staus == 'ACTIVE'}
                onClick={() => onClick()}
                position="relative"
              >
                {data.status == 'ACTIVE'
                  ? '예매 취소하기'
                  : '취소된 예약입니다.'}
              </Button>
            </InfoBox>
          </InfoWrapper>
        </>
      ) : (
        <div>404error</div>
      )}
    </Wrapper>
  );
}

export default ReservationCacelPage;
