import React from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  Label,
  Wrapper,
} from './LoginFormStyle';
import { Logo } from 'components/Header/HeaderStyle';
function LoginForm() {
  const formHander = () => {
    console.log('form submit');
  };
  return (
    <Wrapper>
      <Logo>AutoeverForever</Logo>
      <Form onSubmit={formHander}>
        <Label>아이디</Label>
        <Input placeholder="아이디" />
        <Label>회원가입</Label>
        <Input placeholder="아이디" />
        <ButtonWrapper>
          <Button type="submit">회원가입</Button>
          <Button type="submit">로그인</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
export default LoginForm;
