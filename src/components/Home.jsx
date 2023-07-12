import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import SearchForm from './form/SearchForm';
import Contents from './Contents/Contents';
import { getPosts } from '../api/post';
import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';
import Button from './common/Button';

const Home = () => {
  const { isLoading, isError, data } = useQuery(['posts'], getPosts);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const showBtn = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', showBtn);
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  if(isLoading) {
    return <div>로딩중</div>
  }
  
  return (
    <Layout>
      {/* <SearchForm /> */}
      <Contents posts={data} isLoading={isLoading} />
      {showTopBtn && (
        <TopBtnBox>
          <Button
            fnc={scrollToTop}
            w={'50px'}
            h={'30px'}
            bc={'#222'}
            fc={'#fff'}>
            TOP
          </Button>
        </TopBtnBox>
      )}
    </Layout>
  );
};

export default Home;

const TopBtnBox = styled.div`
  position: fixed;
  right: 20px;
  bottom: 40px;
`;
