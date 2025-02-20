import { instance } from 'apis/productApi';

// 상품 전체 목록 조회
export const GetAllProduct = async ({ pageParam = 0 }) => {
  try {
    console.log('Fetching page:', pageParam); // 디버깅용
    const res = await instance.get(`/info/?pageNum=${pageParam}`);

    if (!res.data || !res.data.data) {
      console.log('No data received'); // 디버깅용
      return {
        data: [],
        nextCursor: undefined,
        hasMore: false
      };
    }

    // API 응답 구조에 맞게 변환하고 필요한 정보 추가
    const products = res.data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      posterUrl: item.posterUrl,
      location: item.location,
      performStartDate: item.performStartDate,
      performEndDate: item.performEndDate
    }));

    console.log('Received products:', products.length); // 디버깅용

    // 데이터가 있으면 항상 다음 페이지가 있다고 가정
    const hasMore = products.length > 0;

    return {
      data: products,
      nextCursor: hasMore ? pageParam + 1 : undefined,
      hasMore
    };
  } catch (err) {
    console.error('상품 목록 조회 실패:', err);
    throw new Error('상품 목록을 불러오는데 실패했습니다.');
  }
};
