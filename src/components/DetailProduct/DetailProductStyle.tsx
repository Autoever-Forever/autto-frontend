import styled from 'styled-components';

interface Textprops {
  width: string;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 3rem;
  text-align: left;
  width: 70%;
  margin-bottom: 2rem;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Poster = styled.img`
  width: 30%;
  height: 60%;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 3rem;
`;
export const Text = styled.div<Textprops>`
  width: ${({ width }) => width};
  text-align: left;
`;
export const Button = styled.button`
  padding: 2rem;
  border-radius: 10px;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
