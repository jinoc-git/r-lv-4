import React from 'react';
import { styled } from 'styled-components';
import Input from '../common/Input';

const SearchForm = () => {
  // lv 5에서 사용
  return (
    <SearchFormLayout>
      <Form>
        <KeepBox></KeepBox>
        <Input type={'text'} w={'80%'} h={'50px'} />
      </Form>
    </SearchFormLayout>
  );
};

export default SearchForm;

const SearchFormLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 120px;
  margin: 40px 0;
  border: 1px solid;
  @media only screen and (max-width: 1024px) {
    width: 60%;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
const KeepBox = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid;
`;
