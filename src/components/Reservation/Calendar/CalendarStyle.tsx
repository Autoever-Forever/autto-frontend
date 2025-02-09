import Calendar from 'react-calendar';
import styled from 'styled-components';

export const Box = styled.div`
  padding: 2rem;
  width: 50%;
  border-right: 1px solid #eee;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
`;

export const CustomCalendar = styled(Calendar)`
  width: 100%;
  max-width: 400px;
  border: none;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 1rem;

  .react-calendar__navigation {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem;

    button {
      background: none;
      border: none;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #f5f5f5;
      }
    }

    .react-calendar__navigation__label {
      font-weight: 600;
      font-size: 1.1rem;
      color: #333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    
    abbr {
      text-decoration: none;
      font-weight: 500;
    }
  }

  .react-calendar__tile {
    padding: 0.75rem;
    font-size: 0.9rem;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      background: #f5f5f5;
    }

    &--active {
      background: var(--main-blue) !important;
      color: white;
      font-weight: 500;

      &:hover {
        background: #0056b3 !important;
      }
    }

    &--now {
      background: #f0f7ff;
    }
  }
`;
