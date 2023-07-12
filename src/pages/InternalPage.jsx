import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Internal from '../components/Internal';

const InternalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Internal />
      <Footer />
    </>
  );
};

export default InternalPage;
