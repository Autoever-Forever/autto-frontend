import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoginIndex from 'pages/User/Login/LoginIndex';
import JoinIndex from 'pages/User/Join/JoinIndex';
import MainPage from 'pages/Main/MainProduct/MainPage';
import DetailIndex from 'pages/Main/DetailProduct/DetailIndex';
import Reservation from 'components/Reservation/Reservation';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginIndex />} />

        <Route path="/signup" element={<JoinIndex />} />

        <Route path="/main" element={<MainPage />} />

        <Route path="/product/:id" element={<DetailIndex />} />

        <Route path="/reservation/:id" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default Router;
