import Calendar from 'react-calendar';
import styled from 'styled-components';
import Select from 'react-select';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  width: 70%;
  margin-bottom: 0.5rem;
`;
export const SubInfo = styled.div`
  font-size: 2rem;
  text-align: left;
  width: 70%;
  margin-bottom: 5rem;
`;
export const ReservationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 2rem;
`;
export const Box = styled.div`
  border: solid 1px black;
  padding: 2rem;
  width: 50%;
`;
export const CustomCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-calendar__navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: solid 1px black;
    width: 90%;
    align-items: center;
    margin-bottom: 2rem;
    .react-calendar__navigation__arrow {
      background-color: white;
      border: none;
      font-size: 3rem;
    }
  }
  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__label {
    font-size: 1.5rem;
    background-color: white;
    border: none;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 1.5rem;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    background-color: white;
    border: none;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 1rem;
  }
  /* 저번 달 & 다음 달 일자 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--blue-gray-400, #ced4da);
    font-size: 1.5rem;
    background-color: none;
  }
  /* 오늘 날짜 */
  .react-calendar__tile--now {
    color: var(--blue-gray-600, #868e96);
    font-size: 1.5rem;
    background: white;
  }
  .react-calendar__tile--now:enabled:hover {
    color: var(--blue-gray-600, #868e96);
    font-size: 1.5rem;
    border-radius: 50px;
    background: #dee2e6;
  }
  /* 선택된 날짜의 배경색 변경 */
  .react-calendar__tile--active {
    color: #868e96;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: #dee2e6;
  }
  .react-calendar__tile--active:enabled {
    color: var(--blue-gray-600, #868e96);
    font-size: 1.5rem;
    border-radius: 50px;
    background: #dee2e6;
  }
`;
export const CntInfo = styled.div`
  font-size: 1.5rem;
  text-align: left;
  line-height: 2rem;
`;
export const CustomSelect = styled(Select)`
  margin-top: 3rem;
  width: 70%;
`;
export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 4rem;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: bold;
  width: 60%;
  margin-bottom: 1rem;
`;
export const Label = styled.div`
  width: 50%;
  text-align: left;
`;
export const Value = styled.div`
  width: 50%;
  text-align: right;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
`;
export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  width: 30%;
  border-radius: 10px;
  padding: 1rem;
  border: none;
  background-color: #d9d9d9;
`;
export const ErrorText = styled.text`
  color: red;
  margin-top: 1rem;
`;
