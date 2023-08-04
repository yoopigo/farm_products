import React from 'react';
import LogoImage from '../../../assets/logo/logo.svg';
import './style.css';

function Logo() {
  return (
    <a href='/' className='logo__link'>
      <img src={LogoImage} alt='Логотип фермерские продукты' />
      <span className='logo__text'>Фермерские продукты</span>
    </a>
  );
}

export default Logo;
