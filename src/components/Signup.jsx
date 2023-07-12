import React from 'react';
import Layout from './layout/Layout';
import { styled } from 'styled-components';
import SignupForm from './form/SignupForm';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SignupBox>
        <h2 style={{ fontSize: '0px' }}>Sign Up</h2>
        <SignupForm />
        <GotoSignin onClick={() => navigate('/signin')}>로그인</GotoSignin>
      </SignupBox>
    </Layout>
  );
};

export default Signup;

const SignupBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const GotoSignin = styled.p`
  cursor: pointer;
`;
