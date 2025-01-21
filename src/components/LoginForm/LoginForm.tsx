import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  Label,
  SubTitle,
  Wrapper,
} from './LoginFormStyle';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorText } from 'pages/User/Login/LoginStyle';
import logo from 'assets/LogoText.svg';
import { GetLogin } from 'apis/user/GetLogin';
import useToken from 'states/Variable';
import useInfo from 'states/Variable';

function LoginForm() {
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [available, setAvailable] = useState<boolean>();
  const navigate = useNavigate();
  const { setToken, setUserEmail, setUserName } = useInfo();

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const checkAvailable = async () => {
    if (id && password) {
      if (!emailRegExp.test(id)) {
        setAvailable(false);
        return console.log('이메일 형식에 맞게 작성해주세요.');
      } else {
        setAvailable(true);
      }
    } else {
      setAvailable(false);
      return console.log('아이디 또는 비밀번호를 입력해주세요.');
    }

    try {
      const res = await GetLogin(id, password);

      setToken(res.data.accessToken);
      setUserName(res.data.name);
      setUserEmail(res.data.email);
      navigate('/');
    } catch (err) {
      return err;
    }
  };

  return (
    <Wrapper>
      <img src={logo}></img>
      <SubTitle>
        만나서 반가워요! 멋진 공연이 기다리고 있어요.
        <br />
        로그인 후 다양한 공연을 관람해보세요!
      </SubTitle>
      <Form>
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
