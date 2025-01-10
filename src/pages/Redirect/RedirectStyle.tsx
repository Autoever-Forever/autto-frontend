import styled from 'styled-components';

interface TextProps {
  weight?: string;
}
export const InfoBox = styled.div`
  width: 50%;
  border-radius: 10px;
  border: 1px solid var(--text-deepgrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2%;
  margin: 5%;
`;

export const LineBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
  padding: 5%;
`;

export const Text = styled.div<TextProps>`
  font-weight: ${({ weight }) => weight};
  font-size: 1rem;
  width: 50%;
  text-align: start;
`;
