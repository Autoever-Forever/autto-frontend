import { instance } from 'apis/api';

export const GetAllProduct = async ({ pageParam = 1 }) => {
  try {
    const res = await instance.get(`8080/?pageNum=${pageParam}`);
    if (res == null) {
      return alert('더이상의 데이터는 없습니다.');
    }
    return res.data;
  } catch (err) {
    return err;
  }
};
