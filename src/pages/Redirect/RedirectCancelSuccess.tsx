import { Button } from 'components/CommonStyle';
import { Title, Wrapper, InfoBox, LineBox, Text, SubTitle, ButtonWrapper } from './RedirectStyle';
import React from 'react';
import useProducts from 'states/useProducts';
import { useNavigate } from 'react-router-dom';

function RedirectCancelSuccess() {
  const { title, seatCnt } = useProducts();
  const navigator = useNavigate();

  return (
    <Wrapper>
      <Title>예매 취소가 완료되었습니다</Title>
      <SubTitle>
        예매하신 내용이 성공적으로 취소되었습니다.<br />
        예매 내역은 마이페이지에서도 확인하실 수 있습니다.
      </SubTitle>

      <InfoBox>
        <LineBox>
          <Text weight="600">공연명</Text>
          <Text>{title}</Text>
        </LineBox>
        <LineBox>
          <Text weight="600">취소 매수</Text>
          <Text>{seatCnt}매</Text>
        </LineBox>
        <LineBox>
          <Text weight="600">취소 상태</Text>
          <Text>예매 취소 완료</Text>
        </LineBox>
      </InfoBox>

      <ButtonWrapper>
        <Button onClick={() => navigator('/')}>메인으로</Button>
        <Button onClick={() => navigator('/mypage')}>예매내역 확인</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default RedirectCancelSuccess;