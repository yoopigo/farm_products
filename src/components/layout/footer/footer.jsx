import React from 'react';
import './style.css';

import Logo from '../../ui/logo/logo';
import Copyright from '../../ui/сopyright/сopyright';

function Footer() {
  return (
    <footer className='footer__wrapper'>
      <div className='footer'>
        <Logo />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
