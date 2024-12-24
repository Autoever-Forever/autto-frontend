import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  border: solid 1px black;
  padding: 2rem;
  min-width: 25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  padding: 2rem 0 1rem 0;
  text-align: left;
`;

export const Input = styled.input`
  border: solid 1px black;
  border-radius: 2px;
  padding: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #d9d9d9;
  color: black;
  font-size: 2rem;
  padding: 1rem 2rem;
`;
