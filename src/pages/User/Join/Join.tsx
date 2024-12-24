import JoinForm from 'components/JoinForm/JoinForm';
import React from 'react';
import { SubTitle, Title, Wrapper } from './JoinStyle';
function Join() {
  return (
    <Wrapper>
      <Title>회원가입</Title>
      <SubTitle>가입을 통해 다양한 공연을 관람해보세요!</SubTitle>
      <JoinForm />
    </Wrapper>
  );
}
export default Join;
