import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainIndex from '../pages/Main/Index';

function Router() {
  return (
    <Routes>
      <Route path="" element={<MainIndex />} />
    </Routes>
  );
}

export default Router;
