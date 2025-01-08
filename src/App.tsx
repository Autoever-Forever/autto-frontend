import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from 'utils/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
