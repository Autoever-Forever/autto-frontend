import styled from 'styled-components';
interface ReservationNumberBoxProps {
  index?: number;
}

interface ReservationNumberProps {
  color?: string;
}
interface SubTitleProps {
  color?: string;
}
interface StateBoxProps {
  now?: boolean;
}
export const ReservationNumberBox = styled.div<ReservationNumberBoxProps>`
  border: solid 1px var(--border-grey);
  border-bottom: none;
  border-radius: ${({ index }) => (index == 0 ? '10px 10px 0 0 ' : null)};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--text-deepgrey);
`;
export const ReservationNumber = styled.text<ReservationNumberProps>`
  width: 70%;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ color }) => (color ? color : null)};
`;
export const ReservationInfoBox = styled.div`
  border: solid 1px var(--border-grey);
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const PosterImg = styled.img`
  width: 10%;
`;
export const TextInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;
export const ProductTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;
export const ProductTitle = styled.div`
  margin-bottom: 1rem;
`;
export const StateBox = styled.div<StateBoxProps>`
  display: flex;
  align-items: flex-start;
  border-radius: 10px;
  padding: 5px;
  /* margin: 0 10px; */
  padding: 10px;
  text-align: center;
  background-color: ${({ now }) =>
    now ? 'rgba(162,210,255, 0.3)' : 'rgba(255,127,80, 0.3)'};
  color: ${({ now }) => (now ? 'var(--text-blue)' : 'var(--text-red')};
`;
export const SubTitle = styled.div<SubTitleProps>`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  padding: 5px 0;
  color: ${({ color }) => (color ? color : 'var(--text-grey)')};
`;
