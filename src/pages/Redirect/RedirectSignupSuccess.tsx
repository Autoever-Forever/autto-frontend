import { Button } from 'components/CommonStyle';
import { Title, Wrapper, InfoBox, LineBox, Text, SubTitle, ButtonWrapper } from './RedirectStyle';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInfo from 'states/Variable';

function RedirectSignupSuccess() {
  const navigator = useNavigate();
  const { userEmail, userName } = useInfo();

  useEffect(() => {
    // 회원가입 후 자동 로그인 상태 체크
    if (!userEmail || !userName) {
      navigator('/login');
    }
  }, [userEmail, userName]);

  return (
    <Wrapper>
      <Title>회원가입이 완료되었습니다</Title>
      <SubTitle>
        환영합니다! {userName}님<br />
        이제 다양한 공연을 예매하실 수 있습니다
      </SubTitle>

      <InfoBox>
        <LineBox>
          <Text weight="600">이메일</Text>
          <Text>{userEmail}</Text>
        </LineBox>
        <LineBox>
          <Text weight="600">이름</Text>
          <Text>{userName}</Text>
        </LineBox>
      </InfoBox>

      <ButtonWrapper>
        <Button onClick={() => navigator('/')}>메인으로</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default RedirectSignupSuccess; 