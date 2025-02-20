import MainProduct from 'components/MainProduct/MainProduct';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetAllProduct } from 'apis/product/GetAllProduct';
import { LoadingSpinner } from 'components/MainProduct/MainProductStyle';
import styled from 'styled-components';
import FeaturedCarousel from 'components/MainProduct/FeaturedCarousel';
import {
  PageContainer,
  FeaturedSection,
  FeaturedTitle,
  FeaturedSubtitle,
  AllShowsSection,
  AllShowsHeader,
  AllShowsTitle,
  ShowCount,
  ShowsGrid
} from './MainProductStyle';

const FeaturedGrid = styled.div`
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

function MainPage() {
  const observerRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: GetAllProduct,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.hasMore) return undefined;
      return lastPage.nextCursor;
    },
    initialPageParam: 0,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasNextPage && !isFetching) {
          console.log('Intersection detected, hasNextPage:', hasNextPage, 'isFetching:', isFetching);
          fetchNextPage();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '200px'
      }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
      console.log('Observer attached to:', currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.disconnect();
      }
    };
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (isLoading) return <LoadingSpinner>로딩 중...</LoadingSpinner>;
  if (isError) return <LoadingSpinner>에러가 발생했습니다: {error.message}</LoadingSpinner>;

  const allProducts = data?.pages.flatMap(page => page?.data || []) ?? [];
  const featuredShows = allProducts.slice(0, 4);
  const remainingShows = allProducts.slice(4);

  return (
    <PageContainer>
      <FeaturedSection>
        <FeaturedTitle>이달의 공연</FeaturedTitle>
        <FeaturedSubtitle>
          이번 달 가장 주목받는 공연을 만나보세요
        </FeaturedSubtitle>
        <FeaturedCarousel shows={featuredShows} />
      </FeaturedSection>

      <AllShowsSection>
        <AllShowsHeader>
          <AllShowsTitle>전체 공연</AllShowsTitle>
          <ShowCount>총 {allProducts.length}개의 공연</ShowCount>
        </AllShowsHeader>
        <ShowsGrid>
          {remainingShows.map((product, index) => (
            <MainProduct
              key={product.id}
              uuid={product.id}
              index={index + 4}
              title={product.title}
              posterUrl={product.posterUrl}
              featured={false}
              location={product.location}
              performStartDate={product.performStartDate}
              performEndDate={product.performEndDate}
            />
          ))}
        </ShowsGrid>
      </AllShowsSection>

      <div 
        ref={observerRef} 
        style={{ 
          height: '50px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem 0'
        }}
      >
        {isFetching && <LoadingSpinner>더 많은 공연 불러오는 중...</LoadingSpinner>}
        {!hasNextPage && <p>더 이상 공연이 없습니다.</p>}
      </div>
    </PageContainer>
  );
}

export default MainPage;
