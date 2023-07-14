import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '../../api/post';
import { useNavigate } from 'react-router-dom';

const SystemModal = (props) => {
  const { msg, isOpenHandler, input, controlPost, type, id, login } = props;

  const navigate = useNavigate();
  useEffect(() => {
    document.body.style = 'overflow: hidden';
    return () => (document.body.style = 'overflow: auto');
  });
  const checkInput = useRef();

  const queryClient = useQueryClient();
  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  const confirmBtnHandler = () => {
    if (login) {
      isOpenHandler(false);
      navigate('/signin');
    }
    if (!input) {
      isOpenHandler(false);
    }
    if (input && type === 'delete') {
      const val = checkInput.current.value;
      controlPost(val, 'delete');
    }
    if (!input && msg === '정말 삭제하시겠습니까?') {
      isOpenHandler(false);
      mutation.mutate(id);
      navigate('/');
    }
    if (input && type === 'edit') {
      const val = checkInput.current.value;
      controlPost(val, 'edit');
    }
  };

  return createPortal(
    <ModalLayout>
      <ModalBox input={input}>
        <AlertParagragh>{msg}</AlertParagragh>
        {input && <Input type={'password'} h={'30px'} refs={checkInput} />}
        <ButtonBox>
          <Button
            w={'80px'}
            h={'36px'}
            fc={'#fff'}
            bc={'#222'}
            fnc={confirmBtnHandler}>
            확인
          </Button>
          {input || type ? (
            <Button
              w={'80px'}
              h={'36px'}
              fc={'#fff'}
              bc={'#222'}
              fnc={() => {
                controlPost(null, 'cancle');
              }}>
              취소
            </Button>
          ) : (
            <></>
          )}
        </ButtonBox>
      </ModalBox>
    </ModalLayout>,
    document.getElementById('modal-portal')
  );
};

export default SystemModal;

const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.24);
`;
const ModalBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: ${({ input }) => (input ? '160px' : '140px')};
  padding: 10px;
  border-radius: 12px;
  border: 2px solid #f26419;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
`;
const AlertParagragh = styled.p`
  cursor: default;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  font-family: 'NanumBarunGothic';
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
