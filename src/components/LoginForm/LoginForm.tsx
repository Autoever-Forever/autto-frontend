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
import { Link } from 'react-router-dom';

function LoginForm() {
  // 폼 제출
  const formHander = () => {
    console.log('form submit');
    // 제출한 폼 api 연결
  };
  // 회원가입 페이지로 전환
  const onClickSignup = () => {};

  return (
    <Wrapper>
      <Logo>AutoeverForever</Logo>
      <Form onSubmit={formHander}>
        <Label>아이디</Label>
        <Input placeholder="아이디" />
        <Label>비밀번호</Label>
        <Input placeholder="비밀번호" />
        <ButtonWrapper>
          <Link to="/signup">
            <Button onClick={() => onClickSignup()}>회원가입</Button>
          </Link>
          <Button type="submit">로그인</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
export default LoginForm;
