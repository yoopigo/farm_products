import React from 'react';
import '../../../mocks/advantagesList';

import {
  AdvantageCardText,
  AdvantageCardHeader,
  AdvantageTitle,
  StyledAdvantageCard,
} from './style';

function AdvantageCard({ title, owner, about, isNegative, image }) {
  return (
    <StyledAdvantageCard isNegative={isNegative}>
      <AdvantageCardHeader>
        <img
          className='advantage-card__img'
          width={52}
          height={52}
          src={image}
          alt={title}
        />
        <div>
          <span
            className={`advantage-card__badge${
              isNegative ? ' advantage-card__badge__negative' : ''
            }`}
          >
            {owner}
          </span>
          <AdvantageTitle>{title}</AdvantageTitle>
        </div>
      </AdvantageCardHeader>
      <AdvantageCardText>{about}</AdvantageCardText>
    </StyledAdvantageCard>
  );
}

export default AdvantageCard;
