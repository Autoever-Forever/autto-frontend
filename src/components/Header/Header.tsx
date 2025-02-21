import React from 'react';
import { 
  HeaderContainer,
  Wrapper, 
  LogoWrapper,
  MainLogo,
  UserSection,
  UserInfo,
  AuthButton,
  MyPageButton
} from './HeaderStyle';
import { useNavigate } from 'react-router-dom';
import useInfo from 'states/Variable';
import logo from 'assets/autto_logo.svg'

function Header() {
  const navigate = useNavigate();
  const { userName, userEmail, token } = useInfo();

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoWrapper onClick={() => navigate('/')}>
          <MainLogo src={logo}/>
        </LogoWrapper>
        
        <UserSection>
          {token ? (
            <>
              <UserInfo>
                {userName}님 환영합니다
              </UserInfo>
              <MyPageButton
                onClick={() => navigate('/mypage')}
              >
                마이페이지
              </MyPageButton>
            </>
          ) : (
            <AuthButton onClick={() => navigate('/login')}>
              로그인
            </AuthButton>
          )}
        </UserSection>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
