import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import InternalPage from '../pages/InternalPage';
import DetailPage from '../pages/DetailPage';
import AbroadPage from '../pages/AbroadPage';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/internal" element={<InternalPage />} />
        <Route path="/abroad" element={<AbroadPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
