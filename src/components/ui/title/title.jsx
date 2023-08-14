import React from 'react';
import StyledTitle from './style';

const TitleSize = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
  DEFAULT: '',
};

function Title({ level = 1, size, children }) {
  return (
    <StyledTitle as={`h${level}`} $size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
export { TitleSize };
