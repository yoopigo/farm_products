import React from 'react';
import { GlobalStyle } from './style';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantagesList';
import products from '../../mocks/products';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} products={products} />;
    </>
  );
}

export default App;
