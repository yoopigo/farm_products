import React from 'react';
import './style.css';

function AdvantageCard({ AdvantageCardColor }) {
  return (
    <section className='advantage-card'>
      <div className='advantage-card__header'>
        <img
          className='advantage-card__img'
          width={52}
          height={52}
          src='/img/badges/eat.svg'
          alt='Еда намного вкуснее'
        />
        <div>
          <span className='advantage-card__badge'>Фермерские продукты</span>
          <p className='advantage-card__title'>Еда намного вкуснее</p>
        </div>
      </div>
      <p className='advantage-card__text'>
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина —
        два настолько разных продукта, что они даже не родственники
      </p>
    </section>
  );
}

export default AdvantageCard;
