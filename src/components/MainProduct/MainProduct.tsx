import React from 'react';
import { Poster, Wrapper, Text } from './MainProductStyle';
import poster from 'assets/login.svg';
import { Link, useNavigate } from 'react-router-dom';

interface MainProductProps {
  title: string;
  productPeriod: string;
  productId?: string;
}
function MainProduct({ title, productPeriod, productId }: MainProductProps) {
  const navigator = useNavigate();
  return (
    <Wrapper onClick={() => navigator(`/product/${productId}`)}>
      <Poster src={poster} />
      <Text>{title} </Text>
      <Text>초등학생 이상 관람가 </Text>
      <Text>{productPeriod}</Text>
    </Wrapper>
  );
}
export default MainProduct;
