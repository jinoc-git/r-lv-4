import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { css, styled } from 'styled-components';
import useValidationSpan from '../../feature/useValidationSpan';

const SignupForm = () => {
  const [check1, check2, check3, checkFnc] = useValidationSpan();
  const onSubmutHandler = (e) => {
    e.preventDefault();
    console.log('in')
  };

  return (
    <SignupLayout onSubmit={onSubmutHandler} onChange={checkFnc}>
      <InputBox>
        <Input name={'email'} size={'medium'} bc={'#f26419'} />
        <ValidationSpan fc={check1.isOK}>{check1.isOK ? check1.msg: '이메일 형식을 확인해 주세요'}</ValidationSpan>
        <Input
          name={'password'}
          type={'password'}
          size={'medium'}
          bc={'#f26419'}
        />
        <ValidationSpan>{check2.isOK ? check2.msg : '영문 숫자 특수문자 포함 12자 이내'}</ValidationSpan>
        <Input
          name={'checkPassword'}
          type={'password'}
          ph={'check password'}
          size={'medium'}
          bc={'#f26419'}
        />
        <ValidationSpan>{check3.isOK ? check3.msg : '비밀번호가 일치하지 않습니다'}</ValidationSpan>
      </InputBox>
      <ButtonBox>
        <Button w={'100%'} bc={'#222'} fc={'#fff'} disabled={check1.isOK && check2.isOK && check3.isOK}>
          회원가입
        </Button>
      </ButtonBox>
    </SignupLayout>
  );
};

export default SignupForm;

const SignupLayout = styled.form`
  width: 440px;
  margin-top: 80px;
  padding: 20px;
  border-radius: 8px;
  /* border: 2px solid #f26419; */
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const ValidationSpan = styled.span`
  height: 15px;
  font-family: 'NanumBarunGothic';
  font-size: 15px;
  color: ${({ fc }) => (fc ? 'blue' : 'red')};
`;
const ButtonBox = styled.div`
  width: 400px;
  margin: 10px auto 0;
  text-align: center;
`;
