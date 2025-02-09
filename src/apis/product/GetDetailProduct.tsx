import { mockProducts } from 'mocks/mockData';
import { instance } from 'apis/productApi';

export const GetDetailProduct = async (uuid: string) => {
  // mockProducts가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  if (mockProducts?.length > 0) {
    const product = mockProducts.find(p => p.id === uuid);
    if (product) {
      return {
        data: {
          id: product.id,
          title: product.title,
          location: product.location,
          performStartDate: product.performStartDate,
          performEndDate: product.performEndDate,
          runningTime: product.runningTime,
          posterUrl: product.posterUrl,
          price: 120000, // Mock 가격 추가
          ticketLimit: product.ticketingLimit // ticketingLimit을 ticketLimit으로 매핑
        }
      };
    }
    return { data: null };
  }

  // Mock 데이터가 없는 경우 실제 API 호출
  try {
    const res = await instance.get(`products/detail?id=${uuid}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
