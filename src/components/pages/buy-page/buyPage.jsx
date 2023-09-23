import React from 'react';
import {
  StyledBuyPage,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
} from './style';
import Panel from '../../ui/panel/panel';
import Title, { TitleSize } from '../../ui/title/title';

function BuyPage() {
  return (
    <StyledBuyPage as='form'>
      <LeftColumn>
        <Panel
          paddingTop={24}
          paddingBottom={26}
          minWidth={353}
          marginBottom={18}
        >
          <Title level={2} size={TitleSize.EXTRA_SMALL} lineHeight={27}>
            Выберите продукт
          </Title>
          Чекбокс со списком продуктовw
        </Panel>
        <Panel
          paddingTop={24}
          paddingBottom={20}
          minWidth={353}
          lineHeight={27}
        >
          <Title level={2} size={TitleSize.EXTRA_SMALL} lineHeight={27}>
            Сделать заказ
          </Title>
          <AddressInput placeholder='Введите адрес доставки'></AddressInput>
          <PriceLabel>Цена</PriceLabel>
          <PriceValue>1 200 руб.</PriceValue>
        </Panel>
      </LeftColumn>
      <div> Слайда</div>
    </StyledBuyPage>
  );
}

export default BuyPage;
