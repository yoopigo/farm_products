import React from 'react';
import { StyledBuyPage, LeftColumn } from './style';
import Panel from '../../ui/panel/panel';
import Title, { TitleSize } from '../../ui/title/title';

function BuyPage() {
  return (
    <StyledBuyPage>
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
        </Panel>
      </LeftColumn>
    </StyledBuyPage>
  );
}

export default BuyPage;
