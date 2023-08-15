import React from 'react';
import StyledMain from './style';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import advantages from '../../../mocks/advantagesList';

function PageWrapper() {
  return (
    <>
      <Header />
      <StyledMain>
        <MainPage advantages={advantages} />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
