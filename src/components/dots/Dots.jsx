import React, { useState } from 'react';
import { styled } from 'styled-components';

const Dots = ({ isOpenHandler, setType, setInput }) => {
  const [isOpen, setIsOpen] = useState(false);
  const otpIsOpenHandler = () => {
    setIsOpen(true);
  };

  return (
    <DotAreaBox>
      <DotsWrapperBtn onClick={otpIsOpenHandler} onBlur={() => setIsOpen(false)}>
        <DotSpan />
        <DotSpan />
        <DotSpan />
      </DotsWrapperBtn>
      {isOpen && (
        <OptionsList>
          <OptionItem
            onMouseDown={() => {
              isOpenHandler(true, '비밀번호를 입력해 주세요');
              setType('edit');
              setInput(true);
            }}>
            수정
          </OptionItem>
          <OptionItem
            onMouseDown={() => {
              isOpenHandler(true, '비밀번호를 입력해 주세요');
              setType('delete');
              setInput(true);
            }}>
            삭제
          </OptionItem>
        </OptionsList>
      )}
    </DotAreaBox>
  );
};

export default Dots;

const DotAreaBox = styled.div`
  position: relative;
`;
const DotsWrapperBtn = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 10px;
  background-color: #fff;
`;
const DotSpan = styled.span`
  display: block;
  width: 3px;
  height: 3px;
  background-color: #555;
`;
const OptionsList = styled.ul`
  cursor: pointer;
  position: absolute;
  bottom: -60px;
  right: -10px;
  width: 80px;
  border: 0.5px solid #dcdcdc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const OptionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  &:hover {
    color: #fff;
    background-color: #f26419;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
