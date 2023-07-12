import React from 'react';
import Layout from './layout/Layout';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import DetailContents from './Contents/DetailContents';

const Detail = () => {
  const location = useLocation();
  const post = location.state.post;

  return (
    <Layout>
      <DetailContents post={post} />
    </Layout>
  );
};

export default Detail;

