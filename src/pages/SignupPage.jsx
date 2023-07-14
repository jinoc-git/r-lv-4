import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Signup from '../components/Signup';

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Signup />
      <Footer />
    </>
  );
};

export default SignupPage;
