import Select from 'react-select';
import styled from 'styled-components';

export const Box = styled.div`
  padding: 2rem;
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
`;

export const CntInfo = styled.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
`;

export const CustomSelect = styled(Select)`
  margin: 2rem 0;
  
  .select__control {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
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
  }

  .select__option {
    padding: 0.8rem 1rem;
    
    &--is-focused {
      background-color: #f5f5f5;
    }

    &--is-selected {
      background-color: var(--main-blue);
    }
  }
`;

export const TotalInfo = styled.div`
  margin-top: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const Label = styled.div`
  font-size: 0.95rem;
  color: #666;
`;

export const Value = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--main-blue);
`;

export const ErrorText = styled.div`
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
