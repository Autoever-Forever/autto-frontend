import styled from 'styled-components';

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductCard = styled.div<{ featured?: boolean }>`
  padding: ${({ featured }) => featured ? '1.5rem' : '1rem'};
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  ${({ featured }) => featured && `
    .poster {
      height: 420px;
    }
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);

    .title-wrapper {
      background: rgba(255, 255, 255, 0.98);
    }
  }
`;

export const TitleWrapper = styled.div<{ featured?: boolean }>`
  padding: ${({ featured }) => featured ? '1.5rem' : '1.25rem'};
  background: rgba(255, 255, 255, 0.95);
  transition: all 0.3s ease;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Text = styled.div<{ featured?: boolean }>`
  font-size: ${({ featured }) => featured ? '1.35rem' : '1.1rem'};
  font-weight: ${({ featured }) => featured ? '800' : '600'};
  color: #1a1a1a;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.3px;
  font-family: 'Pretendard', sans-serif;
  margin-bottom: ${({ featured }) => featured ? '0.75rem' : '0.5rem'};
  transition: color 0.2s ease;

  &:hover {
    color: var(--main-blue);
  }
`;

export const Location = styled.div<{ featured?: boolean }>`
  font-size: ${({ featured }) => featured ? '1rem' : '0.9rem'};
  color: #666;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export const Period = styled.div<{ featured?: boolean }>`
  font-size: ${({ featured }) => featured ? '0.9rem' : '0.85rem'};
  color: #888;
  margin-top: 0.25rem;
  font-weight: 400;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--main-blue);
  margin: 3rem 0;
  letter-spacing: -0.5px;
`;

export const LoadingSpinner = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 0.9rem;
`;
