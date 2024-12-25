import React from 'react';
import {
  CategoryWrapper,
  Input,
  Label,
  Wrapper,
  Form,
  Button,
} from './JoinFormStyle';
function JoinForm() {
  const submitHandler = () => {
    console.log('submit join');
  };
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <CategoryWrapper>
          <Label>이름</Label>
          <Input placeholder="이름" />
        </CategoryWrapper>
        <CategoryWrapper>
          <Label>아이디</Label>
          <Input placeholder="아이디" style={{ width: '50%' }} />
          <Button size="20%">중복확인</Button>
        </CategoryWrapper>
        <CategoryWrapper>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호" />
        </CategoryWrapper>
        <CategoryWrapper>
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호 확인" />
        </CategoryWrapper>
        <Button margin="5rem">회원가입</Button>
      </Form>
    </Wrapper>
  );
}
export default JoinForm;
