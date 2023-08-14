import React from 'react';
import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import AdvantagesCard from '../../ui/advantage-card/advantage-card';
import { StyledAdvantages, AdvantagesListUl } from './style';

function AdvantagesList({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>
      <Title level={2}>Почему фермерские продукты лучше?</Title>
      <AdvantagesListUl>
        {advantages.map((advantage) => (
          <li className='advantages-list__item' key={advantage.id}>
            <AdvantagesCard {...advantage} />
          </li>
        ))}
      </AdvantagesListUl>
      <Button minWidth={260} link='/catalog'>
        Купить
      </Button>
    </StyledAdvantages>
  ) : null;
}

export default AdvantagesList;
