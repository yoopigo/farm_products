import React from 'react';
import { StyledBuyPage, LeftColumn } from './style';
import Panel from '../../ui/panel/panel';

function BuyPage() {
  return (
    <StyledBuyPage>
      <LeftColumn>
        <Panel
          paddingTop={24}
          paddingBottom={26}
          minWidth={353}
          marginBottom={18}
        ></Panel>
        <Panel addingTop={24} paddingBottom={20} minWidth={353}></Panel>
      </LeftColumn>
    </StyledBuyPage>
  );
}

export default BuyPage;
