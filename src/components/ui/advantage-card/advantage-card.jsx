import React from 'react';
import './style.css';
import '../../../mocks/advantagesList';

function AdvantageCard({ title, owner, about, isNegative, image }) {
  return (
    <section
      className={`advantage-card${
        isNegative ? ' advantage-card__negative' : ''
      }`}
    >
      <div className='advantage-card__header'>
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
          <p className='advantage-card__title'>{title}</p>
        </div>
      </div>
      <p className='advantage-card__text'>{about}</p>
    </section>
  );
}

export default AdvantageCard;
