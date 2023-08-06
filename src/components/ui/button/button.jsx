import React from 'react';
import './style.css';

const ButtonFlexCenter = {
  CENTER: 'flex-center',
  DEFAULT: '',
};

const ButtonSize = {
  DEFAULT: '',
  BIG: 'BIG',
};

function Button({ children, buttonFlex, buttonSize }) {
  return (
    <button
      type='button'
      className={`button${buttonFlex ? ` button__${buttonFlex}` : ''}${
        buttonSize ? ` button__${buttonSize}` : ''
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
export { ButtonFlexCenter, ButtonSize };
