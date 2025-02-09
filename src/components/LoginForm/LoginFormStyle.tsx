import styled from 'styled-components';

export const LogoText = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--main-blue);
  margin: 2rem 0 1rem 0;
  letter-spacing: -1px;
  font-family: 'Poppins', sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  height: 100vh;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2.5rem;
`;

export const Form = styled.div`
  width: 100%;
  background: white;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 0;
  text-align: left;
  color: #666;
  display: block;
  margin-top: 1rem;
`;

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  background-color: #f5f5f5;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    background-color: #eeeeee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  background-color: var(--main-blue);
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;
