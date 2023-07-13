import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import Contents from './Contents/Contents';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/post';
import Button from './common/Button';
import { styled } from 'styled-components';

const Abroad = () => {
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
      if (window.scrollY > 1200) {
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
      <Contents posts={data} genre={'abroad'} />
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

export default Abroad;

const TopBtnBox = styled.div`
  position: fixed;
  right: 20px;
  bottom: 40px;
`;
