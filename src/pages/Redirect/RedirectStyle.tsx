import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--main-blue);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '✓';
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: var(--main-blue);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: normal;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4rem;
  line-height: 1.6;
`;

export const InfoBox = styled.div`
  width: 100%;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
`;

export const LineBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export const Text = styled.div<{ weight?: string }>`
  font-size: 1.1rem;
  font-weight: ${({ weight }) => weight || '400'};
  color: ${({ weight }) => weight ? '#333' : '#666'};
  width: 50%;
  text-align: ${({ weight }) => weight ? 'left' : 'right'};

  &:last-child {
    color: ${({ weight }) => weight === '600' ? 'var(--main-blue)' : '#666'};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  button {
    min-width: 180px;
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
