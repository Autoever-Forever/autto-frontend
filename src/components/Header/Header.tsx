import React from 'react';
import { Logo, Wrapper, UserImg, User, Text } from './HeaderStyle';
import logo from 'assets/Logo.svg';
import userImg from 'assets/user_logo.svg';
import useInfo from 'states/Variable';

function Header() {
  const { userName, userEmail, token } = useInfo();
  return (
    <Wrapper>
      <Logo src={logo} />
      <User>
        {token == undefined ? `${userName} ( ${userEmail} ) 님` : null}
        {token == undefined ? (
          <UserImg src={userImg} alt="user" />
        ) : (
          <Text>로그인 / 회원가입</Text>
        )}
      </User>
    </Wrapper>
  );
}

export default Header;
