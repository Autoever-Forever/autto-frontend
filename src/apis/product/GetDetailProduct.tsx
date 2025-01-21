import { instance } from 'apis/productApi';

export const GetDetailProduct = async (uuid: string) => {
  try {
    const res = await instance.get(`products/detail?id=${uuid}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};
