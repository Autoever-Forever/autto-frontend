import { axiosPrivate } from 'apis/productApi';
// import { mockProducts, mockSeatInventory } from 'mocks/mockData';

export const GetInventoryProduct = async (uuid: string) => {
  // // Mock 데이터 사용 시
  // const mockProduct = mockProducts.find(p => p.id === uuid);
  // if (mockProduct) {
  //   // 해당 공연의 좌석 정보 찾기
  //   const inventoryDates = Object.values(mockSeatInventory)
  //     .filter(seat => seat.productId === uuid)
  //     .map(seat => ({
  //       date: seat.date,
  //       inventory: seat.totalSeats - seat.reservedSeats,
  //       price: seat.price,
  //       seatId: seat.id,
  //       title: mockProduct.title,
  //       location: mockProduct.location,
  //       performStartDate: mockProduct.performStartDate,
  //       performEndDate: mockProduct.performEndDate
  //     }));
  //
  //   return {
  //     data: inventoryDates
  //   };
  // }

  // 실제 API 호출
  try {
    const res = await axiosPrivate(`/info/inventory?id=${uuid}`);
    console.log("im here")
    if (!res.data || !res.data.data) {
      return { data: [] };
    }

    return {
      data: res.data.data.map((item: any) => ({
        date: item.date,
        inventory: item.inventory,
        price: item.price,
        seatId: item.seatId,
        title: item.title,
        location: item.location,
        performStartDate: item.performStartDate,
        performEndDate: item.performEndDate
      }))
    };
  } catch (err) {
    console.error('재고 조회 실패:', err);
    throw new Error('재고 정보를 불러오는데 실패했습니다.');
  }
};
