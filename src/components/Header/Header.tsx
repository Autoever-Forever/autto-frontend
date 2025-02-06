import React from 'react';
import { Logo, Wrapper, UserImg, User, Text } from './HeaderStyle';
import logo from 'assets/Logo.svg';
import userImg from 'assets/user_logo.svg';
import useInfo from 'states/Variable';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigator = useNavigate();
  const { userName, userEmail, token } = useInfo();

  return (
    <Wrapper>
      <Logo src={logo} onClick={() => navigator('/')} />
      <User>
        {token == undefined ? null : `${userName} ( ${userEmail} ) 님`}
        {token == undefined ? (
          <Text onClick={() => navigator('/login')}>로그인 / 회원가입</Text>
        ) : (
          <UserImg
            src={userImg}
            alt="user"
            onClick={() => navigator('/mypage')}
          />
        )}
      </User>
    </Wrapper>
  );
}

export default Header;
