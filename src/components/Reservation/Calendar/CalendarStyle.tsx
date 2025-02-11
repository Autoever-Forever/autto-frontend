import styled from 'styled-components';

interface DateTextProps {
  selected?: boolean;
  available?: boolean;
  day?: number;
  empty?: boolean;
}

export const CalendarBox = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 1rem;
`;

export const DayText = styled.div`
  color: var(--text-grey);
  font-size: 0.9rem;
`;

export const DateBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

export const MonthText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-black);
`;

export const DateText = styled.div<DateTextProps>`
  padding: 0.5rem;
  text-align: center;
  cursor: ${({ available, empty }) => (available && !empty ? 'pointer' : 'default')};
  border-radius: 5px;
  color: ${({ available, day, empty }) => {
    if (empty) return 'transparent';
    if (!available) return 'var(--text-grey)';
    if (day === 0) return 'var(--text-red)';  // 일요일
    if (day === 6) return 'var(--text-blue)';  // 토요일
    return 'var(--text-black)';
  }};
  background-color: ${({ selected, available }) =>
    selected && available ? 'var(--main-blue)' : 'transparent'};
  color: ${({ selected, available }) =>
    selected && available ? 'white' : undefined};

  &:hover {
    background-color: ${({ available, empty }) =>
      available && !empty ? 'var(--bg-mint)' : 'transparent'};
  }
`;
