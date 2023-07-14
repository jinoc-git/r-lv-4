import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
      <Box>
        <FooterLink target="_blank" to={'https://nbcamp.spartacodingclub.kr/'}>
          내일배움캠프
        </FooterLink>
        <Copyright>
          © 2023 &nbsp;
          <FooterLink target="_blank" to={''}>
            #Music
          </FooterLink>{' '}
          &nbsp;powered by &nbsp;
          <FooterLink target="_blank" to={'https://github.com/jinoc-git'}>
            Jinoc
          </FooterLink>
        </Copyright>
      </Box>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin-top: 100px;
  background-color: #F26419;
`;
const Box = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const FooterLink = styled(Link)`
  font-weight: 500;
  &:hover {
    color: #fafafa;
  }
  &:visited {
    color: #fafafa;
  }
`;
const Copyright = styled.p`
  margin: 20px 0;
  color: #eee;
`;
