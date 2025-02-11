import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

export const FeaturedSection = styled.section`
  width: 100%;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  padding: 6rem 0;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const FeaturedTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--main-blue);
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const FeaturedSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const FeaturedGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AllShowsSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const AllShowsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

export const AllShowsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  transition: color 0.2s ease;

  &:hover {
    color: var(--main-blue);
  }
`;

export const ShowCount = styled.span`
  font-size: 1rem;
  color: #666;
  background-color: #f5f5f5;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #eef1f5;
    color: var(--main-blue);
  }
`;

export const ShowsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`; 