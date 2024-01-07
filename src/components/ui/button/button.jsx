import React from 'react';
import StyledButton from './style';

function Button({ children, minWidth, link, onClick, ...props }) {
  return (
    <StyledButton
      {...props}
      $minWidth={minWidth || '100%'}
      {...(link ? { href: link } : { as: 'button', onClick, type: 'button' })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
