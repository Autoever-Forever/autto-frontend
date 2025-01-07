import React from 'react';
import { Logo, Wrapper, UserImg, User } from './HeaderStyle';
import logo from 'assets/Logo.svg';
import userImg from 'assets/user_logo.svg';
import useToken from 'states/Variable';

function Header() {
  const { userName } = useToken((state) => state);
  return (
    <Wrapper>
      <Logo src={logo} />
      <User>
        {/* {userName ? userName : null} */}
        name
        <UserImg src={userImg} alt="user" />
      </User>
    </Wrapper>
  );
}

export default Header;
