import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Detail from '../components/Detail';

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Detail />
      <Footer />
    </>
  );
};

export default DetailPage;
