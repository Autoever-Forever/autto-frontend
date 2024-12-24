import React from 'react';
import { Logo, Wrapper, UserImg } from './HeaderStyle';
import userImg from 'assets/user_logo.png';

function Header() {
  return (
    <Wrapper>
      <Logo>AutoeverForever</Logo>
      <UserImg src={userImg} alt="user" />
    </Wrapper>
  );
}

export default Header;
