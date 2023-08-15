import React from 'react';
import '../../../mocks/advantagesList';

import {
  AdvantageCardText,
  AdvantageCardHeader,
  AdvantageTitle,
  StyledAdvantageCard,
  AdvantageCardBadge,
  AdvantageImg,
} from './style';

function AdvantageCard({ title, owner, about, isNegative, image }) {
  return (
    <StyledAdvantageCard isNegative={isNegative}>
      <AdvantageCardHeader>
        <AdvantageImg src={image} alt={title} />
        <div>
          <AdvantageCardBadge isNegative={isNegative}>
            {owner}
          </AdvantageCardBadge>
          <AdvantageTitle>{title}</AdvantageTitle>
        </div>
      </AdvantageCardHeader>
      <AdvantageCardText>{about}</AdvantageCardText>
    </StyledAdvantageCard>
  );
}

export default AdvantageCard;
