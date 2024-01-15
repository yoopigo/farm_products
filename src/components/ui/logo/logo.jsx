import React from 'react';
import { ReactComponent as LogoImage } from '../../../assets/logo/logo.svg';
import { LogoLink, LogoText } from './style';
import { appRoute } from '../../../route';

function Logo() {
  return (
    <LogoLink to={appRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
