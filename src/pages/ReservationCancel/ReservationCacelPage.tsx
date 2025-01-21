import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  LabelWrapper,
  Text,
} from '../../components/DetailProduct/DetailProductStyle';
import poster from 'assets/poster.png';
import { Title, Button, Wrapper } from 'components/CommonStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { GetReservationCancel } from 'apis/reservation/GetReservationCancel';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { PostReservationCancel } from 'apis/reservation/PostReservationCancel';
import useProducts from 'states/useProducts';

function ReservationCacelPage() {
  const { reservationId } = useParams();
  const navigator = useNavigate();
  const [data, setData] = useState();
  const { setSuccess, setSeatCnt } = useProducts();

  useEffect(() => {
    const GetCancel = async () => {
      try {
        const res = await GetReservationCancel(reservationId);
        setData(res.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    GetCancel();
  }, []);

  const onClick = async () => {
    const res = await PostReservationCancel(reservationId);
    if (res.data) {
      // 예매 취소 완료인 상태
      setSuccess('reservationCancel');
      setSeatCnt(data.seatCount);
      navigator('/success');
    } else {
      alert('예매를 취소하지 못했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Wrapper>
      {data ? (
        <>
          <Title text_align="start" width="80%">
            {data.title}
          </Title>
          <InfoWrapper>
            <Poster src={poster} />
            <InfoBox>
              <LabelWrapper>
                <Text width="30%">장소</Text>
                <Text width="60%">{data.location}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 일자</Text>
                <Text width="60%">{data.ticketDate.slice(0, 10)}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 시간</Text>
                <Text width="60%">
                  {data.ticketDate.slice(11, 13)}시{' '}
                  {data.ticketDate.slice(14, 16)}분{' '}
                </Text>
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
                <Text width="60%">{data.seatsPrice}</Text>
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
