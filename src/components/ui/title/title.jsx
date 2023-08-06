import React from 'react';
import './style.css';

const TitleSize = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
  DEFAULT: '',
};

function Title({ children, size }) {
  return (
    <h1 className={`title${size ? ` title__${size}` : ''}`}>{children}</h1>
  );
}

export default Title;
export { TitleSize };
