import styled from 'styled-components';
interface ButtonProps {
  size?: string;
  margin?: string;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Form = styled.form`
  border: none;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 1rem;
  border-bottom: solid 1px black;
`;
export const Label = styled.label`
  font-size: 1.5rem;
  width: 30%;
  text-align: left;
`;
export const Input = styled.input`
  border: none;
  font-size: 1.5rem;
  padding: 1rem;
  width: 70%;
  margin: 1rem;
`;
export const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  background-color: #d9d9d9;
  border-radius: 10px;
    padding: 1rem;
  border: none;
  width: ${({ size }) => (size ? size : '100%')};
  margin-top: ${({ margin }) => (margin ? margin : 0)};
`;
