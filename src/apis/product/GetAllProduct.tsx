import { mockProducts } from 'mocks/mockData';
import { instance } from 'apis/productApi';

export const GetAllProduct = async ({ pageParam = 0 }) => {
  // mockProducts가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  if (mockProducts?.length > 0) {
    // 페이지당 4개씩 보여주기
    const pageSize = 4;
    const start = pageParam * pageSize;
    const end = start + pageSize;
    const pageData = mockProducts.slice(start, end);

    // 다음 페이지가 있는지 확인
    const hasMore = end < mockProducts.length;

    return {
      data: pageData,
      nextCursor: hasMore ? pageParam + 1 : undefined,
      hasMore
    };
  }

  // Mock 데이터가 없는 경우 실제 API 호출
  try {
    const res = await instance.get(`/products/?pageNum=${pageParam}`);

    if (!res.data) {
      alert('더이상의 데이터는 없습니다.');
      return null;
    }
    return res.data;
  } catch (err) {
    return err;
  }
};
