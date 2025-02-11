import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  line-height: 1.3;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--main-blue);
    border-radius: 2px;
  }
`;

export const SubInfo = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  letter-spacing: -0.3px;
`;

export const ReservationBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ButtonBox = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;

  button {
    min-width: 200px;
    padding: 1.2rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:first-child {
      background: #f8f9fa;
      color: #666;
      border: 1px solid #ddd;

      &:hover {
        background: #eee;
        transform: translateY(-2px);
      }
    }

    &:last-child {
      background: linear-gradient(135deg, var(--main-blue), #008891);
      color: white;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 173, 181, 0.3);

      &:hover {
        background: linear-gradient(135deg, #008891, var(--main-blue));
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 173, 181, 0.4);
      }
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: var(--main-blue);
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: var(--text-red);
`;
