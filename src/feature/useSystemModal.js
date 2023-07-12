import React, { useState } from 'react';

const useSystemModal = () => {
  const [isOpen, setIsOpen] = useState({
    is: false,
    msg: [''],
  });

  const handler = (val, msg) => {
    setIsOpen({ ...isOpen, is: val, msg: [msg] });
  };

  return [isOpen.is, isOpen.msg[0], handler];
};

export default useSystemModal;
