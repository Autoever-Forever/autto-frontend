import { axiosPrivate } from 'apis/productApi';

export const GetReservation = async () => {
  try {
    const res = await axiosPrivate.get(`mypage/reservation`);

    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};
