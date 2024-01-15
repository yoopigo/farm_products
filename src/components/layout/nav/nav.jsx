import React from 'react';
import Button from '../../ui/button/button';
import { appRoute } from '../../../route';
import { StyledButton } from './style';
import { useLocation } from 'react-router-dom';
import { Li } from '../../styled/index';

const links = [
  {
    to: appRoute.MAIN,
    item: <StyledButton link={appRoute.MAIN}>Главная</StyledButton>,
  },
  {
    to: appRoute.CATALOG,
    item: (
      <Button minWidth={260} link={appRoute.CATALOG}>
        Купить
      </Button>
    ),
  },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav className='nav'>
      {links
        .filter((link) => link.to !== pageUrl)
        .map((link) => (
          <Li key={link.to}>{link.item}</Li>
        ))}
    </nav>
  );
}

export default Nav;
