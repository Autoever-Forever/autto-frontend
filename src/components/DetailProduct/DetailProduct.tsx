import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  Title,
  Wrapper,
  LabelWrapper,
  Text,
  Button,
} from './DetailProductStyle';
import tempImg from 'assets/Logo.svg';
import { useNavigate, useParams } from 'react-router-dom';

interface DetailProductProps {
  productId?: string;
}
function DetailProduct({ productId }: DetailProductProps) {
  const { id } = useParams();
  const navigator = useNavigate();
  const [productInfo, setProductInfo] = useState([]);

  const data = [
    { label: '공연 제목', value: '뮤지컬 <시라노>' },
    { label: '장소', value: '예술의 전당 CJ 토월극장' },
    { label: '공연기간', value: '2024.12.06 ~ 2025.02.03' },
    { label: '공연시간', value: '160분(인터미션 20분 포함)' },
    { label: '관람연령', value: '초등학생 이상 관람가' },
    { label: '가격', value: '150,000원' },
  ];
  // 상품 상세 정보 가져오기
  useEffect(() => {
    //productId 값 넣어서 상품 상세 정보 가져오기
    setProductInfo(data);
  }, []);

  return (
    <Wrapper>
      <Title>{data[0].value}</Title>
      <InfoWrapper>
        <Poster src={tempImg} />
        <InfoBox>
          {productInfo.map((data, ind) => {
            if (ind == 0) {
              return null;
            }
            return (
              <LabelWrapper key={ind}>
                <Text width="30%">{data.label}</Text>
                <Text width="60%">{data.value}</Text>
              </LabelWrapper>
            );
          })}
          <Button onClick={() => navigator(`/reservation/${id}`)}>
            예매하기
          </Button>
        </InfoBox>
      </InfoWrapper>
    </Wrapper>
  );
}
export default DetailProduct;
