import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  Label,
  Wrapper,
} from './LoginFormStyle';
import { Logo } from 'components/Header/HeaderStyle';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorText } from 'pages/User/Login/LoginStyle';

function LoginForm() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [available, setAvailable] = useState<boolean>();
  const navigate = useNavigate();

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const checkAvailable = async () => {
    if (id && password) {
      if (!emailRegExp.test(id)) {
        // 모달 발생 및 아래 추가적인 글씨 보여주기
        setAvailable(false);
        return console.log('이메일 형식에 맞게 작성해주세요.');
      }
      setAvailable(true);
      return formHander();
    } else {
      setAvailable(false);
      return console.log('아이디 또는 비밀번호를 입력해주세요.');
    }
  };

  // 폼 제출
  const formHander = () => {
    // 응답값에 따라 상품 페이지로 이동
    console.log('submit form');

    navigate('/main');
    // 제출한 폼 api 연결
  };
  // 회원가입 페이지로 전환

  return (
    <Wrapper>
      <Logo>AutoeverForever</Logo>
      <Form onSubmit={formHander}>
        <Label>아이디</Label>
        <Input placeholder="아이디" onChange={(e) => setId(e.target.value)} />
        {available != undefined && !available ? (
          <ErrorText>이메일 형식에 맞는 아이디를 작성해주세요.</ErrorText>
        ) : null}
        <Label>비밀번호</Label>
        <Input
          placeholder="비밀번호"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {available != undefined && !available ? (
          <ErrorText>비밀번호를 입력해주세요.</ErrorText>
        ) : null}
        <ButtonWrapper>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
          <Button onClick={() => checkAvailable()}>로그인</Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
export default LoginForm;
