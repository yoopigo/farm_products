import React from 'react';
import './style.css';
import Title, { Location } from '../../ui/title/title';
import Button from '../../ui/button/button';
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
            <AdvantagesCard {...advantage} />
          </li>
        ))}
      </ul>
      <Button minWidth={260} link='/catalog'>
        Купить
      </Button>
    </section>
  ) : null;
}

export default AdvantagesList;
