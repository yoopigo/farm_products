import React from 'react';
import StyledTitle from './style';

const TitleSize = {
  BIG: 'big',
  NORMAL: 'normal',
  SMALL: 'small',
  EXTRA_SMALL: 'extra_small',
  DEFAULT: '',
};

function Title({ level = 1, size, children, lineHeight }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} lineHeight={lineHeight}>
      {children}
    </StyledTitle>
  );
}

export default Title;
export { TitleSize };
