import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoginIndex from 'pages/User/Login/LoginIndex';
import JoinIndex from 'pages/User/Join/JoinIndex';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginIndex />} />

        <Route path="/signup" element={<JoinIndex />} />
      </Routes>
    </>
  );
}

export default Router;
