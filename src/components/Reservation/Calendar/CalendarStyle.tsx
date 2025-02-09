import Calendar from 'react-calendar';
import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

export const CustomCalendar = styled(Calendar)`
  width: 100%;
  max-width: 100%;
  background: white;
  border: none;
  font-family: inherit;

  .react-calendar__navigation {
    height: 48px;
    margin-bottom: 1.5rem;

    button {
      min-width: 44px;
      background: none;
      border: none;
      font-size: 1.2rem;
      color: #333;

      &:enabled:hover,
      &:enabled:focus {
        background: none;
        color: var(--main-blue);
      }

      &[disabled] {
        color: #ccc;
      }
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 0.5rem;
    
    abbr {
      text-decoration: none;
      border: none;
    }
  }

  .react-calendar__month-view__days {
    gap: 0;
    padding: 0;
  }

  .react-calendar__tile {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    color: #333;
    background: none;
    border: none;
    
    &:enabled:hover,
    &:enabled:focus {
      background: none;
      color: var(--main-blue);
      font-weight: 600;
    }

    &--now {
      color: var(--main-blue);
      font-weight: 600;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--main-blue);
      }
    }

    &--active {
      background: none !important;
      color: var(--main-blue) !important;
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        border: 2px solid var(--main-blue);
        border-radius: 50%;
      }

      &:enabled:hover,
      &:enabled:focus {
        color: var(--main-blue) !important;
      }
    }

    &:disabled {
      background: #f5f5f5;
      color: #ccc;
      cursor: not-allowed;

      &:hover {
        background: #f5f5f5;
        color: #ccc;
      }
    }

    &.selected-date {
      background: none !important;
      color: var(--main-blue) !important;
      font-weight: 600;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        border: 2px solid var(--main-blue);
        border-radius: 50%;
      }

      &:hover {
        color: var(--main-blue) !important;
      }
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: var(--text-red);

    &:disabled {
      color: #ffcdd2;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #eee;
  }

  .react-calendar__tile--now {
    &:disabled {
      background: #f5f5f5;
      color: #ccc;
      
      &::after {
        display: none;
      }
    }
  }
`;
