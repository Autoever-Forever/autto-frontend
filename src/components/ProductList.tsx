import React, { useEffect, useState } from 'react';
import { GetAllProduct } from 'apis/product/GetAllProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [pageParam, setPageParam] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreProducts = async () => {
    if (!hasMore) return;

    const response = await GetAllProduct({ pageParam });
    if (response) {
      setProducts((prev) => [...prev, ...response.data]);
      setHasMore(response.hasMore);
      setPageParam((prev) => prev + 1); // 다음 페이지로 이동
    }
  };

  useEffect(() => {
    loadMoreProducts(); // 컴포넌트가 마운트될 때 초기 데이터 로드

    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      loadMoreProducts(); // 스크롤이 바닥에 닿으면 추가 데이터 로드
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.posterUrl} alt={product.title} />
          {/* 추가적인 상품 정보 표시 */}
        </div>
      ))}
      {!hasMore && <p>더 이상 데이터가 없습니다.</p>}
    </div>
  );
};

export default ProductList; 