import styled from 'styled-components';

interface ButtonProps {
  size?: string;
  margin?: string;
  fontSize?: string;
  padding?: string;
  available?: boolean;
  color?: string;
}

interface InputProps {
  width?: string;
}

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const CategoryWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width || '100%'};
  padding: 0.875rem 1rem;
  font-size: 0.95rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f8f9fa;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--main-blue);
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 173, 181, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: ${({ size }) => size || '100%'};
  padding: ${({ padding }) => padding || '0.875rem 1rem'};
  font-size: ${({ fontSize }) => fontSize || '0.95rem'};
  font-weight: 500;
  color: ${({ available }) => (available ? 'white' : '#adb5bd')};
  background-color: ${({ available }) =>
    available ? 'var(--main-blue)' : '#f1f3f5'};
  border: none;
  border-radius: 8px;
  cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
  transition: all 0.2s ease;
  margin-top: ${({ margin }) => margin || '0'};

  ${({ available }) =>
    available &&
    `
    &:hover {
      background-color: #0056b3;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(1px);
    }
  `}
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

export const SuccessMessage = styled.div`
  color: var(--main-blue);
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;
