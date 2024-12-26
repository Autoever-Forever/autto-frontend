import LoginForm from 'components/LoginForm/LoginForm';
import loginImg from 'assets/login.svg';
import React from 'react';
import { LoginImg, Wrapper } from './LoginStyle';

function Login() {
  return (
    <Wrapper>
      <LoginImg src={loginImg} />
      <LoginForm />
    </Wrapper>
  );
}
export default Login;
