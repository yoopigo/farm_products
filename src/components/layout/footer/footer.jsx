import React from 'react';
import Logo from '../../ui/logo/logo';
import Copyright from '../../ui/сopyright/сopyright';
import { StyledFooter, FooterWrapper } from './style';

function Footer() {
  return (
    <FooterWrapper>
      <StyledFooter>
        <Logo />
        <Copyright />
      </StyledFooter>
    </FooterWrapper>
  );
}

export default Footer;
