import React from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;

const Main = styled.main`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 330px);
  margin-top: 80px;
`;
