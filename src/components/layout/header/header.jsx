import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
