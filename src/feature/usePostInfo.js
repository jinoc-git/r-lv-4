import React, { useState } from 'react';

const usePostInfo = () => {
  const [info, setInfo] = useState({
    artist: '',
    title: '',
    genre: '',
    password: '',
    linkUrl: '',
    hash: [],
  });
  const [pwInputOutline, setPwInputOutline] = useState(false);

  const handler = ({ target }) => {
    const { name, value } = target;
    if (name === 'title') setInfo({ ...info, title: value });
    if (name === 'artist') setInfo({ ...info, artist: value });
    if (name === 'linkUrl') setInfo({ ...info, linkUrl: value });
    if (name === 'genre') setInfo({ ...info, genre: value });
    if (name === 'hash') {
      const splitHash = value.split(' ');
      setInfo({ ...info, hash: [...splitHash] });
    }
    if (name === 'password') {
      const passwordRegEx =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;
      if (passwordRegEx.test(value)) {
        setPwInputOutline(true);
        setInfo({ ...info, password: value });
      } else {
        setPwInputOutline(false);
      }
    }
  };

  return [pwInputOutline, info, handler];
};

export default usePostInfo;
