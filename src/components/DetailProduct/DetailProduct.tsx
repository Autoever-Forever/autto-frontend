import React, { useEffect, useState } from 'react';
import {
  InfoBox,
  InfoWrapper,
  Poster,
  LabelWrapper,
  Text,
} from './DetailProductStyle';
import poster from 'assets/poster.png';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { Button, Wrapper, Title } from 'components/CommonStyle';
import useProducts from 'states/useProducts';
import { GetDetailProduct } from 'apis/product/GetDetailProduct';
import useInfo from 'states/Variable';

function DetailProduct() {
  const { id } = useParams();
  const navigator = useNavigate();
  const { uuid } = useProducts();
  const { token } = useInfo();

  const [data, setData] = useState();

  useEffect(() => {
    const GetDetail = async () => {
      try {
        const res = await GetDetailProduct(uuid);
        setData(res.data);
      } catch (err) {
        return err;
      }
    };
    GetDetail();
  }, []);

  //예매하기 버튼 누를 때
  const onClick = () => {
    // 로그인 되어 있을 때
    if (token) {
      return navigator(`/inventory/${id}`);
    }
    // 로그인 안되어 있을
    else {
      alert('로그인 후 이용해주세요.');
      return navigator('/login');
    }
  };

  return (
    <Wrapper>
      {data && data.price ? (
        <>
          <Title text_align="start" width="80%">
            {data.title}
          </Title>
          <InfoWrapper>
            <Poster src={data.posterUrl} />
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
                  {data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  원
                </Text>
              </LabelWrapper>

              <LabelWrapper>
                <Text width="30%">최대 매수</Text>
                <Text width="60%">{data.ticketLimit} 매</Text>
              </LabelWrapper>

              <Button
                onClick={() => onClick()}
                position="relative"
                status={true}
              >
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
