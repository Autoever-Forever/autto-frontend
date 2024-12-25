import LoginForm from 'components/LoginForm/LoginForm';
import loginImg from 'assets/login.png';
import React from 'react';
function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img
        src={loginImg}
        style={{ width: '40%', height: '100%' }}
        alt="login"
      />
      <LoginForm />
    </div>
  );
}
export default Login;
