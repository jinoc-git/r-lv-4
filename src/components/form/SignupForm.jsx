import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { css, styled } from 'styled-components';
import useValidationSpan from '../../feature/useValidationSpan';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [check1, check2, check3, checkFnc] = useValidationSpan();
  const [isOpen, msg, isOpenHandler] = useSystemModal();
  const navigate = useNavigate();
  
  const onSubmutHandler = async (e) => {
    e.preventDefault();
    try {
      
      navigate('/');
    } catch (error) {
    
      // isOpenHandler(true, '이미 가입된 이메일입니다');
    }
  };

  return (
    <SignupLayout onSubmit={onSubmutHandler} onChange={checkFnc}>
      <InputBox>
        <Input name={'email'} size={'medium'} bc={'#f26419'} />
        <ValidationSpan fc={check1.isOK}>
          {check1.msg ? check1.msg : ''}
        </ValidationSpan>
        <Input
          name={'password'}
          type={'password'}
          size={'medium'}
          bc={'#f26419'}
        />
        <ValidationSpan fc={check2.isOK}>
          {check2.msg ? check2.msg : ''}
        </ValidationSpan>
        <Input
          name={'checkPassword'}
          type={'password'}
          ph={'check password'}
          size={'medium'}
          bc={'#f26419'}
        />
        <ValidationSpan fc={check3.isOK}>
          {check3.msg ? check3.msg : ''}
        </ValidationSpan>
      </InputBox>
      <ButtonBox>
        <Button
          w={'100%'}
          bc={'#222'}
          fc={'#fff'}
          disabled={check1.isOK && check2.isOK && check3.isOK}>
          회원가입
        </Button>
      </ButtonBox>
      {isOpen && <SystemModal isOpenHandler={isOpenHandler} msg={msg} />}
    </SignupLayout>
  );
};

export default SignupForm;

const SignupLayout = styled.form`
  width: 440px;
  margin-top: 80px;
  padding: 20px;
  border-radius: 8px;
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
  color: ${({ fc }) => (fc ? '#4444fd' : 'red')};
`;
const ButtonBox = styled.div`
  width: 400px;
  margin: 10px auto 0;
  text-align: center;
`;
