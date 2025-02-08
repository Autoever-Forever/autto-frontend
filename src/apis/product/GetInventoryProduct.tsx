import { axiosPrivate } from 'apis/productApi';

// 공연 날짜 정보 조회
export const GetInventoryProduct = async (uuid: string) => {
  try {
    const res = await axiosPrivate(`/info/inventory?id=${uuid}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
