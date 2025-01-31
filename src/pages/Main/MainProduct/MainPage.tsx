import MainProduct from 'components/MainProduct/MainProduct';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetAllProduct } from 'apis/product/GetAllProduct';
import { RowWrapper, Title, Wrapper } from 'components/CommonStyle';

function MainPage() {
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
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.data !== null && lastPage.data.length < 5) {
        return undefined;
      }
      return allPage.length;
    },
    initialPageParam: 0,
  });

  const observerRef = useRef(null);
  if (data && data.pages == undefined) {
    return alert('페이지가 끝났습니다. ');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러: {error.message}</div>;

  // API 응답 구조에 맞게 데이터 변환
  const products = data.pages.flatMap((page) => page.data) ?? null;

  return (
    <Wrapper>
      {products[0] !== null ? (
        <>
          <Title style={{ textAlign: 'center' }}>이달의 공연</Title>
          <Wrapper flex_direction="row" width="80%" padding="0 10%">
            {products.map((product, index) => (
              <MainProduct
                key={`${product.id}-${index}`}
                uuid={product.id}
                index={index}
                title={product.title}
                posterUrl={product.posterUrl}
              />
            ))}
          </Wrapper>

          {/* 관찰할 요소 */}
          <div ref={observerRef} style={{ height: '10px' }}>
            {isFetching && <div>추가 데이터 로딩 중...</div>}
          </div>
        </>
      ) : null}
    </Wrapper>
  );
}

export default MainPage;
