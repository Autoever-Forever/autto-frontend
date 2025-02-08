import { instance } from 'apis/productApi';

// 공연 상세 정보 조회 
export const GetDetailProduct = async (uuid: string) => {
  try {
    const res = await instance.get(`/info/detail?id=${uuid}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
