import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoginIndex from 'pages/User/Login/LoginIndex';
import JoinIndex from 'pages/User/Join/JoinIndex';
import MainPage from 'pages/Main/MainProduct/MainPage';
import DetailIndex from 'pages/Main/DetailProduct/DetailIndex';
import ReservationIndex from 'pages/Reservation/ReservationIndex';
import MypageIndex from 'pages/Mypage/MyPageIndex';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginIndex />} />

        <Route path="/signup" element={<JoinIndex />} />

        <Route path="/" element={<MainPage />} />

        <Route path="/product/:id" element={<DetailIndex />} />

        <Route path="/inventory/:id" element={<ReservationIndex />} />

        <Route path="/mypage" element={<MypageIndex />} />
      </Routes>
    </>
  );
}

export default Router;
