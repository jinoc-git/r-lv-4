import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { styled } from 'styled-components';
import useSystemModal from '../../feature/useSystemModal';
import SystemModal from '../modal/SystemModal';
import { useNavigate } from 'react-router';
import api from '../../api/user';
import { useDispatch } from 'react-redux';
import { signinUser } from '../../redux/modules/userSlice';

const SigninForm = () => {
  const [isOpen, msg, isOpenHandler] = useSystemModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmutHandler = async (e) => {
    e.preventDefault();
    try {
      const [email, password] = e.target;
      if (email.value === '') {
        isOpenHandler(true, '이메일을 입력해 주세요');
        return false;
      }
      if (password.value === '') {
        isOpenHandler(true, '비밀번호를 입력해 주세요');
        return false;
      }

      const userInfo = {
        id: email.value,
        password: password.value,
      };

      const res = await api.post('/login', userInfo);
      const token = res.data.token;
      const newUser = { is: true, token }
      dispatch(signinUser(newUser));
      navigate('/');
    } catch (error) {
      if (error === '존재하지 않는 유저입니다.') {
        isOpenHandler(true, '이메일을 확인해 주세요');
      }
      if (error === '비밀번호가 일치하지 않습니다.') {
        isOpenHandler(true, '비밀번호를 확인해 주세요');
      }
    }
  };

  return (
    <SignupLayout onSubmit={onSubmutHandler}>
      <InputBox>
        <Input name={'email'} size={'medium'} bc={'#f26419'} />
        <Input
          name={'password'}
          type={'password'}
          size={'medium'}
          bc={'#f26419'}
        />
      </InputBox>
      <ButtonBox>
        <Button w={'100%'} bc={'#222'} fc={'#fff'} type={'submit'}>
          로그인
        </Button>
      </ButtonBox>
      {isOpen && <SystemModal isOpenHandler={isOpenHandler} msg={msg} />}
    </SignupLayout>
  );
};

export default SigninForm;

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
