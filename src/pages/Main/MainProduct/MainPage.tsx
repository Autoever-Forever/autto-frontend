import MainProduct from 'components/MainProduct/MainProduct';
import { Title } from 'components/MainProduct/MainProductStyle';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  const [productList, setProducList] = useState([]);
  const data = [
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
    { title: '뮤지컬 <시라노>', productPeriod: '2024.12.12 ~ 2025.01.01' },
  ];
  // 상품 리스트 가져오기
  useEffect(() => {
    // 상품 리스트 가져오는 api 연결
    setProducList(data);
  }, []);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Title style={{ textAlign: 'center' }}>이달의 공연</Title>
      {productList.map((data, ind) => {
        return (
          <MainProduct
            key={ind}
            title={data.title}
            productPeriod={data.productPeriod}
          />
        );
      })}
    </div>
  );
}

export default MainPage;
