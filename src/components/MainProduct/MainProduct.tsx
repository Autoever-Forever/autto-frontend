import React from 'react';
import { Poster, Text } from './MainProductStyle';
import poster from 'assets/poster.png';
import { Link, useNavigate } from 'react-router-dom';
import { RowWrapper, Wrapper } from 'components/CommonStyle';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import useProducts from 'states/useProducts';

interface MainProductProps {
  uuid: string;
  index: number;
  title: string;
  posterUrl?: string;
}
function MainProduct({ uuid, index, title, posterUrl }: MainProductProps) {
  const navigator = useNavigate();
  const { setUuid } = useProducts();

  const queryClient = new QueryClient();

  const onClick = () => {
    // react-query 에 uuid 값 가져가기
    setUuid(uuid);
    navigator(`/product/${index}`);
  };
  return (
    <Wrapper onClick={async () => await onClick()} width="25%">
      <Poster src={poster} />
      <Text>{title} </Text>
      {/* <Text>초등학생 이상 관람가 </Text> */}
    </Wrapper>
  );
}
export default MainProduct;
