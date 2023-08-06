import React from 'react';
import './style.css';
import Title, { Location } from '../../ui/title/title';
import Button, { ButtonFlexCenter } from '../../ui/button/button';
import AdvantagesCard from '../../ui/advantage-card/advantage-card';

function AdvantagesList({ advantages }) {
  return (
    <section className='advantages-list'>
      <Title location={Location.CENTER}>
        Почему фермерские продукты лучше?
      </Title>
      <ul className='advantages-list__list'>
        <li className='advantages-list__item'>
          <AdvantagesCard />
        </li>
      </ul>
      <Button buttonFlex={ButtonFlexCenter.CENTER}>Купить</Button>
    </section>
  );
}

export default AdvantagesList;
