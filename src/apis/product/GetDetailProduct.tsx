import { mockProducts } from 'mocks/mockData';
import { instance } from 'apis/productApi';

export const GetDetailProduct = async (uuid: string) => {
  // mockProducts가 존재하고 데이터가 있는 경우 Mock 데이터 사용
  if (mockProducts?.length > 0) {
    const product = mockProducts.find(p => p.id === uuid);
    return {
      data: product || null
    };
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
