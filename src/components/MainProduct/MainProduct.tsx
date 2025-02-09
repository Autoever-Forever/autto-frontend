import React from 'react';
import { Poster, Text, ProductCard, TitleWrapper, Location, Period } from './MainProductStyle';
import poster from 'assets/poster.png';
import logo from 'assets/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { RowWrapper, Wrapper } from 'components/CommonStyle';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import useProducts from 'states/useProducts';

interface MainProductProps {
  uuid: string;
  index: number;
  title: string;
  posterUrl?: string;
  featured?: boolean;
  disableLink?: boolean;
  location: string;
  performStartDate: string;
  performEndDate: string;
}

function MainProduct({ 
  uuid, 
  index, 
  title, 
  posterUrl, 
  featured, 
  disableLink,
  location,
  performStartDate,
  performEndDate 
}: MainProductProps) {
  const navigator = useNavigate();
  const { setUuid } = useProducts();
  const queryClient = new QueryClient();

  const onClick = () => {
    if (disableLink) return;
    setUuid(uuid);
    navigator(`/product/${index}`);
  };

  return (
    <ProductCard onClick={onClick} featured={featured}>
      <Poster src={posterUrl} alt={title} className="poster" />
      <TitleWrapper className="title-wrapper" featured={featured}>
        <Text featured={featured}>{title}</Text>
        <Location featured={featured}>{location}</Location>
        <Period featured={featured}>
          {performStartDate?.slice(0, 10)} - {performEndDate?.slice(0, 10)}
        </Period>
      </TitleWrapper>
      {/* <Text>초등학생 이상 관람가 </Text> */}
    </ProductCard>
  );
}

export default MainProduct;
