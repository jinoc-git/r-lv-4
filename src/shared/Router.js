import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import InternalPage from '../pages/InternalPage';
import DetailPage from '../pages/DetailPage';
import AbroadPage from '../pages/AbroadPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internal" element={<InternalPage />} />
        <Route path="/abroad" element={<AbroadPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
