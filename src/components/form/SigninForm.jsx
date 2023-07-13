import React from 'react'
import Input from '../common/Input';
import Button from '../common/Button';
import { css, styled } from 'styled-components';

const SigninForm = () => {

  const onSubmutHandler = (e) => {
    e.preventDefault();
  }

  return (
    <SignupLayout onSubmit={onSubmutHandler}>
      <InputBox>
        <Input name={'email'} size={'medium'} bc={'#f26419'} />
        <Input name={'password'} type={'password'} size={'medium'} bc={'#f26419'} />
      </InputBox>
      <ButtonBox>
        <Button w={'100%'} bc={'#222'} fc={'#fff'}>
          로그인
        </Button>
      </ButtonBox>
    </SignupLayout>
  )
}

export default SigninForm

const SignupLayout = styled.form`
  width: 440px;
  margin-top: 120px;
  padding: 20px;
  border-radius: 8px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ButtonBox = styled.div`
  width: 400px;
  margin: 20px auto 0;
  text-align: center;
`;
