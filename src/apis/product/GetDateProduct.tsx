import { axiosPrivate } from 'apis/userApi';

export const GetDateProduct = async (uuid: string) => {
  try {
    const res = await axiosPrivate(`8080/inventory?id=${uuid}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
