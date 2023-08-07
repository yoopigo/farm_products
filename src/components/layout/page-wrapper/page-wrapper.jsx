import React from 'react';
import './style.css';

import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import advantages from '../../../mocks/advantagesList';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage advantages={advantages} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
