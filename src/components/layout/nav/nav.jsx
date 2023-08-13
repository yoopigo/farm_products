import React from 'react';
import Button from '../../ui/button/button';

function Nav() {
  return (
    <nav className='nav'>
      <Button minWidth={260} link='/catalog'>
        Купить
      </Button>
    </nav>
  );
}

export default Nav;
