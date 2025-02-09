import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  LabelWrapper,
  Text,
  Title,
  Wrapper,
  ReservationButton,
  LoadingWrapper,
  ErrorWrapper
} from './DetailProductStyle';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from 'states/useProducts';
import { GetDetailProduct } from 'apis/product/GetDetailProduct';
import useInfo from 'states/Variable';

function DetailProduct() {
  const { id } = useParams();
  const navigator = useNavigate();
  const { uuid } = useProducts();
  const { token } = useInfo();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const GetDetail = async () => {
      try {
        const res = await GetDetailProduct(uuid);
        setData(res.data);
      } catch (err) {
        return err;
      } finally {
        setLoading(false);
      }
    };
    GetDetail();
  }, [uuid]);

  const handleReservation = () => {
    if (!token) {
      alert('로그인 후 이용해주세요.');
      return navigator('/login');
    }
    navigator(`/inventory/${id}`);
  };

  if (loading) return (
    <LoadingWrapper>
      데이터를 불러오는 중입니다...
    </LoadingWrapper>
  );
  
  if (!data || !data.price) return (
    <ErrorWrapper>
      죄송합니다. 공연 정보를 찾을 수 없습니다.
    </ErrorWrapper>
  );

  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <InfoWrapper>
        <Poster src={data.posterUrl} alt={data.title} />
        <InfoBox>
          <LabelWrapper>
            <Text width="30%">장소</Text>
            <Text width="60%">{data.location}</Text>
          </LabelWrapper>

          <LabelWrapper>
            <Text width="30%">공연 기간</Text>
            <Text width="60%">
              {data.performStartDate.slice(0, 10)} ~{' '}
              {data.performEndDate.slice(0, 10)}
            </Text>
          </LabelWrapper>

          <LabelWrapper>
            <Text width="30%">공연 시간</Text>
            <Text width="60%">시작 시간 ({data.runningTime})</Text>
          </LabelWrapper>

          <LabelWrapper>
            <Text width="30%">가격</Text>
            <Text width="60%">
              {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
            </Text>
          </LabelWrapper>

          <LabelWrapper>
            <Text width="30%">최대 매수</Text>
            <Text width="60%">{data.ticketLimit} 매</Text>
          </LabelWrapper>

          <ReservationButton onClick={handleReservation}>
            예매하기
          </ReservationButton>
        </InfoBox>
      </InfoWrapper>
    </Wrapper>
  );
}

export default DetailProduct;
