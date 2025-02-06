import { axiosPrivate } from 'apis/productApi';

export const GetInventoryProduct = async (uuid: string) => {
  try {
    const res = await axiosPrivate(`products/inventory?id=${uuid}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
