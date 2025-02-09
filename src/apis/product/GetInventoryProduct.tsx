import { axiosPrivate } from 'apis/productApi';
import { mockProducts } from 'mocks/mockData';

export const GetInventoryProduct = async (uuid: string) => {
  // 테스트 데이터 체크
  const mockProduct = mockProducts.find(p => p.id === uuid);
  if (mockProduct) {
    return {
      data: [{
        date: new Date().toISOString().split('T')[0],
        inventory: mockProduct.inventory,
        price: mockProduct.price,
        seatId: `SEAT-${mockProduct.id}`,
        title: mockProduct.title,
        location: mockProduct.location,
        performStartDate: mockProduct.performStartDate,
        performEndDate: mockProduct.performEndDate
      }]
    };
  }

  // 실제 API 호출
  try {
    const res = await axiosPrivate.get(`/products/inventory/${uuid}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
