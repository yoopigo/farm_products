import React from 'react';
import { ReactComponent as LogoImage } from '../../../assets/logo/logo.svg';
import { LogoLink, LogoText } from './style';

function Logo() {
  return (
    <LogoLink href='/'>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
