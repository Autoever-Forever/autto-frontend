import styled from 'styled-components';
interface ErrorTextProps {
  margin?: string;
  available?: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const ErrorText = styled.div<ErrorTextProps>`
  color: var(--text-red);
  margin-left: ${({ margin }) => (margin ? margin : null)};
`;
