import { useState } from 'react';

const useValidationSpan = () => {
  const [emailValidatoin, setEmailValidation] = useState({
    isOK: false,
    msg: '',
  });
  const [pwValidatoin, setPwValidation] = useState({
    isOK: false,
    msg: '',
    pw: '',
  });
  const [checkPwValidatoin, setCheckPwValidation] = useState({
    isOK: false,
    msg: '',
  });

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{3}$/i;
  const passwordRegEx =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;

  const onChangeValidation = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      if (emailRegEx.test(value)) {
        setEmailValidation({ isOK: true, msg: '올바른 이메일 형식입니다' });
      } else {
        if (value === '') {
          setEmailValidation({ isOK: false, msg: '' });
        } else {
          setEmailValidation({
            isOK: false,
            msg: '이메일 형식을 확인해 주세요',
          });
        }
      }
    }
    if (name === 'password') {
      if (passwordRegEx.test(value)) {
        setPwValidation({
          isOK: true,
          msg: '올바른 비밀번호 형식입니다',
          pw: value,
        });
      } else {
        if (value === '') {
          setPwValidation({
            isOK: false,
            msg: '',
            pw: value,
          });
        } else {
          setPwValidation({
            isOK: false,
            msg: '영문 숫자 특수문자 포함 12자 이내',
            pw: value,
          });
        }
      }
    }
    if (name === 'checkPassword') {
      if (value === '') {
        setCheckPwValidation({ isOK: false, msg: '' });
      } else {
        if (value === pwValidatoin.pw) {
          setCheckPwValidation({ isOK: true, msg: '비밀번호가 일치합니다' });
        } else {
          setCheckPwValidation({
            isOK: false,
            msg: '비밀번호가 일치하지 않습니다',
          });
        }
      }
    }
  };

  return [emailValidatoin, pwValidatoin, checkPwValidatoin, onChangeValidation];
};

export default useValidationSpan;
