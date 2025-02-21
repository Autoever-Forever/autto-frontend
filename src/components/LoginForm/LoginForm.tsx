import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  Label,
  SubTitle,
  Wrapper,
  MainLogo,
} from './LoginFormStyle';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorText } from 'pages/User/Login/LoginStyle';
import { GetLogin } from 'apis/user/GetLogin';
import useInfo from 'states/Variable';
import logo from 'assets/autto_logo.svg'

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
      if (res.result) {
        setToken(res.data.accessToken);
        setUserName(res.data.name);
        setUserEmail(res.data.email);

        sessionStorage.setItem('token', res.data.accessToken);
        sessionStorage.setItem('userName', res.data.name);
        sessionStorage.setItem('userEmail', res.data.email);

        setTimeout(() => {
          navigate('/');
        }, 100);
      } else {
        alert('로그인에 실패했습니다.');
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <Wrapper>
      <MainLogo src={logo}/>
      <SubTitle>
        만나서 반가워요! 멋진 공연이 기다리고 있어요.
        <br />
        로그인 후 다양한 공연을 관람해보세요!
      </SubTitle>
      <Form>
        <Label>이메일</Label>
        <Input 
          placeholder="이메일을 입력해주세요" 
          onChange={(e) => setId(e.target.value)}
        />
        {available != undefined && !available ? (
          <ErrorText>이메일 형식에 맞는 아이디를 작성해주세요.</ErrorText>
        ) : null}
        <Label>비밀번호</Label>
        <Input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {available != undefined && !available ? (
          <ErrorText>비밀번호를 입력해주세요.</ErrorText>
        ) : null}
        <ButtonWrapper>
          <Button onClick={() => checkAvailable()}>로그인</Button>
          <Link to="/signup" style={{ width: '100%' }}>
            <Button style={{ 
              width: '100%',
              backgroundColor: 'white',
              color: 'var(--main-blue)',
              border: '1px solid var(--main-blue)'
            }}>
              회원가입
            </Button>
          </Link>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}
export default LoginForm;
