import React from 'react';
import StyledButton from './style';

function Button({ children, minWidth, link }) {
  return (
    <StyledButton
      $minWidth={minWidth || '100%'}
      {...(link ? { href: link } : { as: 'button', type: 'button' })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
