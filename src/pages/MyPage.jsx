import React, { useEffect } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import My from '../components/My';

const MyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <My />
      <Footer />
    </>
  );
}

export default MyPage