import MypageList from 'components/MypageList/MypageList';
import React, { useEffect, useState } from 'react';

function Mypage() {
  const [reservationList, setReservationList] = useState([]);
  const data = [
    {
      reservationNumber: '123456789',
      title: '뮤지컬 <시라노>',
      state: '예매 완료',
      reservationDate: '2024.12.12',
      productDate: '2024.01.01',
    },
  ];

  useEffect(() => {
    // 사용자 에약 내역 조회하는 api 연결
    setReservationList(data);
    console.log('사용자 예약 내역 가져오기');
  }, []);

  const cancelHandler = () => {
    // 예약 취소하는 api 연결
    // 사용자 + 예매번호 ?
    console.log('cancel ticket');
  };
  return (
    <>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '1rem',
          fontSize: '2rem',
        }}
      >
        예약 확인
      </div>
      {data.map((data, ind) => {
        return (
          <MypageList
            key={ind}
            reservationNumber={data.reservationNumber}
            title={data.title}
            state={data.state}
            reservationDate={data.reservationDate}
            productDate={data.productDate}
          />
        );
      })}
    </>
  );
}

export default Mypage;
