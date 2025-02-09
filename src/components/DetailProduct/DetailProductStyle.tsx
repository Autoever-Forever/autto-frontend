import styled from 'styled-components';

interface TextProps {
  width: string;
}

interface LabelWrapperProps {
  color?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 3rem;
  width: 100%;
  text-align: left;
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

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 4rem;
  width: 100%;
  padding: 3rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 2rem;
`;

export const LabelWrapper = styled.div<LabelWrapperProps>`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const Text = styled.div<TextProps>`
  width: ${({ width }) => width};
  font-size: ${props => props.width === '30%' ? '0.9rem' : '1.2rem'};
  color: ${props => props.width === '30%' ? '#888' : '#333'};
  font-weight: ${props => props.width === '30%' ? '500' : '600'};
  line-height: 1.6;
  letter-spacing: -0.3px;
`;

export const ReservationButton = styled.button`
  width: 100%;
  padding: 1.3rem;
  margin-top: 3rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--main-blue), #008891);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 173, 181, 0.3);

  &:hover {
    background: linear-gradient(135deg, #008891, var(--main-blue));
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 173, 181, 0.4);
  }

  &:active {
    transform: translateY(-1px);
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
