import JoinForm from 'components/JoinForm/JoinForm';
import React from 'react';
import { SubTitle, Title } from './JoinStyle';
import { Wrapper } from 'components/CommonStyle';
function Join() {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SubTitle>회원이 되어 다양한 공연을 관람해보세요!</SubTitle>
      <JoinForm />
    </Wrapper>
  );
}
export default Join;
