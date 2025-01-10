import { axiosPrivate } from 'apis/api';

export const GetInventroyProduct = async (uuid: string) => {
  try {
    const res = await axiosPrivate(
      `8080/inventory?id=${uuid}`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};
