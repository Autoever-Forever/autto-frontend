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
  width: 80%;
  min-height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0;
`;
export const Poster = styled.img`
  width: 30%;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  font-size: 100%;
  margin-bottom: 5%;
`;
export const Text = styled.div<Textprops>`
  width: ${({ width }) => width};
  text-align: left;
`;
