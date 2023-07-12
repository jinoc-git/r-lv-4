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
        setEmailValidation({ isOK: false, msg: '' });
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
        setPwValidation({
          isOK: false,
          msg: '',
          pw: value,
        });
      }
    }
    if (name === 'checkPassword') {
      if (value === pwValidatoin.pw) {
        setCheckPwValidation({ isOK: true, msg: '비밀번호가 일치합니다' });
      } else {
        setCheckPwValidation({ isOK: false, msg: '' });
      }
    }
  };

  return [emailValidatoin, pwValidatoin, checkPwValidatoin, onChangeValidation];
};

export default useValidationSpan;
