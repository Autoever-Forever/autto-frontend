import styled from 'styled-components';
interface ErrorTextProps {
  margin?: string;
  available?: boolean;
}

interface WrapperProps {
  flex_direction?: string;
  width?: string;
  padding?: string;
}

interface ButtonProps {
  position?: string;
  width?: string;
  status?: boolean;
}
interface TitleProps {
  width?: string;
  text_align?: string;
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flex_direction }) =>
    flex_direction ? flex_direction : 'column'};
  align-items: center;
  justify-content: ${({ flex_direction }) =>
    flex_direction ? 'flex-start' : 'center'};
  max-width: ${({ width }) => (width ? width : '100%')};
  padding: ${({ padding }) => (padding ? padding : null)};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ErrorText = styled.div<ErrorTextProps>`
  color: var(--text-red);
  margin-left: ${({ margin }) => (margin ? margin : null)};
`;
export const Title = styled.text<TitleProps>`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  margin: 2rem;
  width: ${({ width }) => (width ? width : '100%')};
  text-align: ${({ text_align }) => (text_align ? text_align : 'center')};
`;

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : null)};
  border-radius: 5px;
  border: none;
  background-color: ${({ status }) =>
    status ? 'var(--main-blue)' : 'var(--bg-grey)'};
  color: ${({ status }) =>
    status ? 'var(--text-white)' : 'var(--text-black)'};
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem 3rem;
  cursor: pointer;
  position: ${({ position }) => (position ? position : null)};
  bottom: ${({ position }) => (position ? 0 : null)};
`;
