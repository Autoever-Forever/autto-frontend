import { instance } from 'apis/productApi';

// 공연 상세 정보 조회
export const GetDetailProduct = async (uuid: string) => {
  try {
    const res = await instance.get(`/info/detail?id=${uuid}`);

    if (!res.data || !res.data.data) {
      return { data: null };
    }

    // API 응답을 Mock 데이터 구조와 일치하도록 변환
    return {
      data: {
        id: res.data.data.id,
        title: res.data.data.title,
        location: res.data.data.location,
        performStartDate: res.data.data.performStartDate,
        performEndDate: res.data.data.performEndDate,
        runningTime: res.data.data.runningTime,
        posterUrl: res.data.data.posterUrl,
        price: res.data.data.price,
        ticketLimit: res.data.data.ticketLimit
      }
    };
  } catch (err) {
    console.error('상품 상세 조회 실패:', err);
    throw new Error('상품 상세 정보를 불러오는데 실패했습니다.');
  }
};
