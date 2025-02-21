import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const MainLogo = styled.img`
  width: 2rem;
  padding: 10px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const UserInfo = styled.span`
  font-size: 0.95rem;
  color: #666;
`;

export const AuthButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  border: none;
  background-color: var(--main-blue);
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MyPageButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--main-blue);
  background-color: white;
  color: var(--main-blue);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }
`;
