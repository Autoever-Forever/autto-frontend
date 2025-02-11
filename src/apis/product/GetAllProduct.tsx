import { instance } from 'apis/productApi';

// 상품 전체 목록 조회
export const GetAllProduct = async ({ pageParam = 0 }) => {
  try {
    const res = await instance.get(`/info/?pageNum=${pageParam}`);

    if (!res.data || !res.data.data) {
      alert('더이상의 데이터는 없습니다.');
      return null;
    }

    // API 응답 구조에 맞게 변환하고 필요한 정보 추가
    const products = res.data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      posterUrl: item.posterUrl,
      location: item.location,                    // 장소 정보 추가
      performStartDate: item.performStartDate,    // 공연 시작일 추가
      performEndDate: item.performEndDate         // 공연 종료일 추가
    }));

    return {
      data: products,
      nextCursor: products.length === 4 ? pageParam + 1 : undefined,
      hasMore: products.length === 4
    };
  } catch (err) {
    console.error('상품 목록 조회 실패:', err);
    throw new Error('상품 목록을 불러오는데 실패했습니다.');
  }
};
