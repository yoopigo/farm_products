import React from 'react';
import './style.css';

const TitleSize = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
  DEFAULT: '',
};

const Location = {
  CENTER: 'center',
  DEFAULT: '',
};

function Title({ children, size, location }) {
  let titleClasses = 'title';

  if (size) {
    titleClasses += ` title__${size}`;
  }

  if (location) {
    titleClasses += ` title__${location}`;
  }

  return <h1 className={titleClasses}>{children}</h1>;
}

export default Title;
export { TitleSize };
export { Location };
