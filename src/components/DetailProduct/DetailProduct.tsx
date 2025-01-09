import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  Title,
  LabelWrapper,
  Text,
} from './DetailProductStyle';
import poster from 'assets/poster.png';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { Button, Wrapper } from 'components/CommonStyle';
import useProducts from 'states/useProducts';
import { GetDetailProduct } from 'apis/product/GetDetailProduct';
import useInfo from 'states/Variable';

interface DetailProductProps {
  productId?: string;
}
function DetailProduct({ productId }: DetailProductProps) {
  const { id } = useParams();
  const navigator = useNavigate();
  const [productInfo, setProductInfo] = useState([]);
  const { uuid } = useProducts();
  const { token } = useInfo();
  const [detail, setDetail] = useState({
    title: null,
    location: null,
    performStartDate: null,
    performEndDate: null,
    runningTime: null,
    price: null,
  });

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await GetDetailProduct(uuid);
        if (res.length == 0) {
          alert('공연 정보를 불러오지 못했습니다. 다시 시도해주세요.');
        } else {
          setDetail(res);
        }
      } catch (err) {
        alert('공연 정보를 불러오지 못했습니다. 다시 시도해주세요.');
      }
    };
    // 상품 상세 정보 가져오기
    getDetail();
  }, []);

  //예매하기 버튼 누를 때
  const onClick = () => {
    // 로그인 되어 있을 때
    if (token) {
      navigator(`/inverntory/${id}`);
    }
    // 로그인 안되어 있을
    else {
      alert('로그인 후 이용해주세요.');
      navigator('/login');
    }
  };

  return (
    <Wrapper>
      {detail ? (
        <>
          <Title>{detail.title}</Title>
          <InfoWrapper>
            <Poster src={poster} />
            <InfoBox>
              <LabelWrapper>
                <Text width="30%">장소</Text>
                <Text width="60%">{detail.location}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 기간</Text>
                <Text width="60%">
                  {detail.performStartDate} ~ {detail.performEndDate}
                </Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">공연 시간</Text>
                <Text width="60%">시작 시간 ({detail.runningTime})</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">가격</Text>
                <Text width="60%">{detail.price}</Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">최대 매수</Text>
                <Text width="60%">{detail.location}</Text>
              </LabelWrapper>

              <Button onClick={() => onClick()} position="relative">
                예매하기
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
export default DetailProduct;
