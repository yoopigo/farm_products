import React from 'react';
import StyledButton from './style';

const ButtonFlexCenter = {
  CENTER: 'flex-center',
  DEFAULT: '',
};

const ButtonSize = {
  DEFAULT: '',
  BIG: 'BIG',
};

function Button({ children, buttonFlex, buttonSize, link }) {
  return (
    <StyledButton
      type='button'
      className={`button${buttonFlex ? ` button__${buttonFlex}` : ''}${
        buttonSize ? ` button__${buttonSize}` : ''
      }`}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
export { ButtonFlexCenter, ButtonSize };
