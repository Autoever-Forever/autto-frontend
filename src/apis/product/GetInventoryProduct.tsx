import { axiosPrivate } from 'apis/productApi';
import { mockProducts, mockSeatInventory } from 'mocks/mockData';

export const GetInventoryProduct = async (uuid: string) => {
  // Mock 데이터 사용 시
  const mockProduct = mockProducts.find(p => p.id === uuid);
  if (mockProduct) {
    // 해당 공연의 좌석 정보 찾기
    const inventoryDates = Object.values(mockSeatInventory)
      .filter(seat => seat.productId === uuid)
      .map(seat => ({
        date: seat.date,
        inventory: seat.totalSeats - seat.reservedSeats,
        price: seat.price,
        seatId: seat.id,
        title: mockProduct.title,
        location: mockProduct.location,
        performStartDate: mockProduct.performStartDate,
        performEndDate: mockProduct.performEndDate
      }));

    return {
      data: inventoryDates
    };
  }

  // 실제 API 호출
  try {
    const res = await axiosPrivate(`/info/inventory?id=${uuid}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
