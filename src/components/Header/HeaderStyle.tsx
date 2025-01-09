import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 5px 0 black;
`;
export const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  text-align: center;
  margin: 1rem;
`;
export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
`;
