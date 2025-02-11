import { axiosPrivate } from 'apis/productApi';

// 공연 날짜 정보 조회
export const GetInventoryProduct = async (uuid: string) => {
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
