import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';

const Input = ({ children, ...props }) => {
  const [value, setValue] = useState('');
  const { type, name, refs, ph, val } = props;
  
  useEffect(() => {
    if (val) {
      setValue(val);
    }
  }, []);

  return (
    <ShareInput
      {...props}
      type={type}
      name={name}
      ref={refs}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      placeholder={ph ? ph : name}>
      {children}
    </ShareInput>
  );
};

export default Input;

const ShareInput = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  font-size: ${({ fs }) => (fs ? fs : '18px')};
  &:focus {
    ${({ fcoc }) => {
      return css`
        outline: ${fcoc && `2px solid ${fcoc}`};
      `;
    }}
  }
  border: 0.5px solid ${({ bc }) => (bc ? bc : '#dcdcdc')};
  ${({ w, h }) => {
    return css`
      width: ${w};
      height: ${h};
    `;
  }}
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 300px;
          height: 30px;
        `;
      case 'medium':
        return css`
          width: 400px;
          height: 35px;
        `;
      case 'large':
        return css`
          width: 500px;
          height: 40px;
        `;
    }
  }}
`;
