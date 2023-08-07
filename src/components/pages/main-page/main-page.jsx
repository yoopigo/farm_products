import React from 'react';
import About from '../../blocks/about/about';
import AdvantagesList from '../../blocks/advantages-list/advantages-list';
import advantages from '../../../mocks/advantagesList';

function MainPage() {
  return (
    <>
      <About />
      <AdvantagesList advantages={advantages} />
    </>
  );
}

export default MainPage;
