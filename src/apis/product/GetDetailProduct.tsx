import { instance } from 'apis/api';

export const GetDetailProduct = async (uuid: string) => {
  try {
    const res = await instance.get(`8080/detail?id=${uuid}`);

    return res.data;
  } catch (err) {
    return err;
  }
};
