import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Signin from '../components/Signin';

const SigninPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Signin />
      <Footer />
    </>
  );
};

export default SigninPage;
