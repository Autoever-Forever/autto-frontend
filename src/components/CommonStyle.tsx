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
  /* overflow: ${(width) => (width ? 'visible' : 'hidden')};
  overflow-x: hidden; */
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
export const Title = styled.text`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
`;
