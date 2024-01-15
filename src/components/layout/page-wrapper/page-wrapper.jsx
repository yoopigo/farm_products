/* eslint-disable no-unused-vars */

import React from 'react';
import StyledMain from './style';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import advantages from '../../../mocks/advantagesList';
import Footer from '../footer/footer';
import BuyPage from '../../pages/buy-page/buyPage';
import products from '../../../mocks/products';

import { Outlet } from 'react-router-dom';

function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
