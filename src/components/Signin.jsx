import React from 'react';
import Layout from './layout/Layout';
import { styled } from 'styled-components';
import SigninForm from './form/SigninForm';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SigninBox>
        <h2 style={{ fontSize: '0px' }}>Sign In</h2>
        <SigninForm />
        <GotoSignup onClick={() => navigate('/signup')}>회원가입</GotoSignup>
      </SigninBox>
    </Layout>
  );
};

export default Signin;

const SigninBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const GotoSignup = styled.p`
  cursor: pointer;
`;
