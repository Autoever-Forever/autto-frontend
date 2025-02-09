import Select from 'react-select';
import styled from 'styled-components';

export const Box = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--main-blue);
    border-radius: 2px;
  }
`;

export const InfoSection = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

export const CntInfo = styled.div`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

export const CustomSelect = styled(Select)`
  margin: 1.5rem 0;
  
  .select__control {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.3rem;
    box-shadow: none;
    transition: all 0.2s ease;

    &:hover {
      border-color: var(--main-blue);
    }

    &--is-focused {
      border-color: var(--main-blue);
      box-shadow: 0 0 0 1px var(--main-blue);
    }
  }

  .select__menu {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .select__option {
    padding: 0.8rem 1rem;
    
    &--is-focused {
      background-color: #f0f7ff;
    }

    &--is-selected {
      background-color: var(--main-blue);
    }
  }

  .select__placeholder {
    color: #999;
  }
`;

export const TotalInfo = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  &:last-child {
    margin-top: 0.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid #eee;
  }
`;

export const Label = styled.div`
  font-size: 0.95rem;
  color: #666;
`;

export const Value = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--main-blue);

  &:last-child {
    font-size: 1.3rem;
  }
`;

export const ErrorText = styled.div`
  color: var(--text-red);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '!';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: var(--text-red);
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
