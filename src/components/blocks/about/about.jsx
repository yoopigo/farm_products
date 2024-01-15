import React from 'react';
import { StyledAbout, StyledAboutWrapper, StyledAboutText } from './style';

import Title, { TitleSize } from '../../ui/title/title';

function About() {
  return (
    <StyledAbout>
      <StyledAboutWrapper>
        <Title size={TitleSize.BIG} lineHeight={50}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledAboutText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем
          заказы заранее и доставляем продукты максимально свежими.
        </StyledAboutText>
      </StyledAboutWrapper>
    </StyledAbout>
  );
}

export default About;
