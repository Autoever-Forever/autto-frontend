import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const SubInfo = styled.div`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const ReservationBox = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

export const Button = styled.button<{ primary?: boolean }>`
  width: 200px;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ primary }) => primary ? 'var(--main-blue)' : '#f5f5f5'};
  color: ${({ primary }) => primary ? 'white' : '#666'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ primary }) => 
      primary ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)'};
  }
`;
