import styled from 'styled-components';

interface ButtonProps {
  size?: string;
  margin?: string;
  fontSize?: string;
  padding?: string;
  available?: boolean;
  color?: string;
}

interface InputProps {
  width?: string;
}

export const Form = styled.form`
  border: none;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: solid 1px black;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  width: 30%;
  text-align: left;
`;
export const Input = styled.input<InputProps>`
  border: none;
  padding: 10px;
  font-size: 1rem;
  width: ${({ width }) => (width ? width : '70%')};
  margin: 0.5rem;
  margin-left: ${(width) => (width ? 0 : null)};
`;
export const Button = styled.button<ButtonProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  color: ${({ available }) => (available ? 'white' : 'black')};
  font-weight: bold;
  background-color: ${({ available }) =>
    available ? 'var(--main-blue)' : 'var(--bg-grey)'};
  border-radius: 10px;
  padding: ${({ padding }) => (padding ? padding : '0.5rem')};
  border: none;
  width: ${({ size }) => (size ? size : '100%')};
  margin-top: ${({ margin }) => (margin ? margin : 0)};
  cursor: pointer;
`;
