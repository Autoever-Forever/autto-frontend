// import { mockProducts } from 'mocks/mockData';
import { instance } from 'apis/productApi';

export const GetDetailProduct = async (uuid: string) => {
  // // mockProducts가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  // if (mockProducts?.length > 0) {
  //   const product = mockProducts.find(p => p.id === uuid);
  //   if (product) {
  //     return {
  //       data: {
  //         id: product.id,
  //         title: product.title,
  //         location: product.location,
  //         performStartDate: product.performStartDate,
  //         performEndDate: product.performEndDate,
  //         runningTime: product.runningTime,
  //         posterUrl: product.posterUrl,
  //         price: 120000, // Mock 가격 추가
  //         ticketLimit: product.ticketingLimit // ticketingLimit을 ticketLimit으로 매핑
  //       }
  //     };
  //   }
  //   return { data: null };
  // }

  // Mock 데이터가 없는 경우 실제 API 호출
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
