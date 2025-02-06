import { instance } from 'apis/productApi';

export const GetAllProduct = async ({ pageParam = 0 }) => {
  try {
    const res = await instance.get(`/products/?pageNum=${pageParam}`);

    if (!res.data) {
      alert('더이상의 데이터는 없습니다.');
      return null;
    }
    return res.data;
  } catch (err) {
    return;
  }
};
