import React, { forwardRef } from 'react';
import StyledButton from './style';

const Button = forwardRef(({ children, minWidth, link, onClick, ...props }, ref) => {
  return (
    <StyledButton {...props} $minWidth={minWidth || '100%'} ref={ref} {...(link ? { to: link } : { as: 'button', onClick, type: 'button' })}>
      {children}
    </StyledButton>
  );
});

export default Button;
