import React from 'react';
import './style.css';
import Title, { Location } from '../../ui/title/title';
import Button, { ButtonFlexCenter } from '../../ui/button/button';
import AdvantagesCard from '../../ui/advantage-card/advantage-card';

function AdvantagesList({ advantages }) {
  return advantages && advantages.length ? (
    <section className='advantages'>
      <Title location={Location.CENTER}>
        Почему фермерские продукты лучше?
      </Title>
      <ul className='advantages-list'>
        {advantages.map((advantage) => (
          <li className='advantages-list__item' key={advantage.id}>
            <AdvantagesCard advantage={advantage} />
          </li>
        ))}
      </ul>
      <Button buttonFlex={ButtonFlexCenter.CENTER}>Купить</Button>
    </section>
  ) : null;
}

export default AdvantagesList;
