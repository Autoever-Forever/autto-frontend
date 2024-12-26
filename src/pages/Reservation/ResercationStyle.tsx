import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  width: 70%;
  margin-bottom: 0.5rem;
`;
export const SubInfo = styled.div`
  font-size: 2rem;
  text-align: left;
  width: 70%;
  margin-bottom: 5rem;
`;
export const ReservationBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  padding: 2rem;
`;
export const ButtonBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
`;
export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  width: 30%;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
`;
