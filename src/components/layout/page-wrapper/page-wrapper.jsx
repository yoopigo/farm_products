/* eslint-disable no-unused-vars */

import React from 'react';
import StyledMain from './style';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import advantages from '../../../mocks/advantagesList';
import Footer from '../footer/footer';
import BuyPage from '../../pages/buy-page/buyPage';
import products from '../../../mocks/products';

function PageWrapper() {
  return (
    <>
      <Header />
      <StyledMain>
        {/* <MainPage advantages={advantages} /> */}
        <BuyPage products={products} />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
