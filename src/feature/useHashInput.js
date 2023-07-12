import React, { useState } from 'react';

const useHashInput = () => {
  const [value, setValue] = useState('#');
  const [key, setKey] = useState(false);
  
  const addHash = (e) => {
    if (e.keyCode === 32) {
      setKey(true);
    }
  };

  const editHash = (h) => {
    let val = '';
    h.forEach(el => {
      val += ' ' + el
    });
    setValue(val)
  }

  const onChangeHashHandler = ({ target }) => {
    let str = target.value;
    let strArr = Array.from(str);
    let hashNum = strArr.filter((a) => a === '#').length;
    if (hashNum >= 6 && strArr[str.length - 1] === ' ') {
      setKey(false);
      return false;
    }
    if (hashNum > 6 && strArr[str.length - 1] === '#') {
      setKey(false);
      strArr.pop();
      str = strArr.toString().replaceAll(',', '');
      setValue(str);
      return false;
    }
    if (key) {
      str += '#';
    }

    setValue(str);
    setKey(false);
  };

  

  return [value, onChangeHashHandler, addHash, editHash];
};

export default useHashInput;
