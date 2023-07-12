import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Abroad from '../components/Abroad';
import Footer from '../components/footer/Footer';

const AbroadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Abroad />
      <Footer />
    </>
  );
};

export default AbroadPage;
