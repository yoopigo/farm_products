import React from 'react';
import { GlobalStyle } from './style';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantagesList';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} />;
    </>
  );
}

export default App;
