import { Button, Title, Wrapper } from 'components/CommonStyle';
import { SubTitle } from 'components/LoginForm/LoginFormStyle';
import React from 'react';
import useProducts from 'states/useProducts';
import { InfoBox, LineBox, Text } from './RedirectStyle';
import { useNavigate } from 'react-router-dom';
import useInfo from 'states/Variable';

function RedirectPage() {
  const { success, title, seatCnt } = useProducts();
  const { userName, userEmail } = useInfo();
  const navigator = useNavigate();
  const ment = [
    '회원이 되신걸 환영합니다!\n로그인 후 서비스를 이용하실 수 있습니다.',
    '즐거운 공연관람되세요.\n마이페이지에서 예매 내역을 확인하실 수 있습니다.',
    '아쉽지만, 다른 공연에서 만나요.\n마이페이지에서 예매 취소 내역을 확인하실 수 있습니다.',
  ];

  const onClick = () => {
    if (success == 'signUp') {
      return navigator('/login');
    }
    if (success == 'reservation' || success == 'reservationCancel') {
      return navigator('/mypage');
    }
  };
  return (
    <Wrapper style={{ height: '90vh' }}>
      <Title>
        {success == 'signUp' ? '회원가입이 ' : null}
        {success == 'reservation' ? '예매가 ' : null}
        {success == 'reservationCancel' ? '예매 취소가 ' : null}
        완료되었습니다!
      </Title>

      <SubTitle style={{ whiteSpace: 'pre-wrap' }}>
        {success == 'signUp' ? ment[0] : null}
        {success == 'reservation' ? ment[1] : null}
        {success == 'reservationCancel' ? ment[2] : null}
      </SubTitle>

      <InfoBox>
        <LineBox>
          <Text weight="bold">
            {success == 'signUp' ? '이름' : null}
            {success == 'reservation' ? '공연명' : null}
            {success == 'reservationCancel' ? '공연명' : null}
          </Text>
          <Text>
            {success == 'signUp' ? userName : null}
            {success == 'reservation' ? title : null}
            {success == 'reservationCancel' ? title : null}
          </Text>
        </LineBox>

        <LineBox>
          <Text weight="bold">
            {success == 'signUp' ? '아이디' : null}
            {success == 'reservation' ? '예매 매수' : null}
            {success == 'reservationCancel' ? '예매 취소 매수' : null}
          </Text>
          <Text>
            {' '}
            {success == 'signUp' ? userEmail : null}
            {success == 'reservation' ? seatCnt : null}
            {success == 'reservationCancel' ? seatCnt : null}
          </Text>
        </LineBox>
      </InfoBox>

      <Button status={true} onClick={onClick}>
        {success == 'signUp' ? '로그인 하러 가기' : null}
        {success == 'reservation' ? '예매 내역 확인하러 가기' : null}
        {success == 'reservationCancel' ? '예매 취소 매수' : null}
      </Button>
    </Wrapper>
  );
}

export default RedirectPage;
