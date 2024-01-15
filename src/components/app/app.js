import React from 'react';
import { GlobalStyle } from './style';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantagesList';
import products from '../../mocks/products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { appRoute } from '../../route.js';
import MainPage from '../pages/main-page/main-page.jsx';
import BuyPage from '../pages/buy-page/buyPage.jsx';
import Scroll from '../ui/scroll/scrol.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Scroll />
        <Routes>
          <Route path={appRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantages} />} />
            <Route path={appRoute.CATALOG.replace(appRoute.MAIN, '')} element={<BuyPage products={products} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
