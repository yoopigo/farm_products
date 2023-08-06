import React from 'react';
import './style.css';

function AdvantageCard({ AdvantageCardColor }) {
  return (
    <article className='advantage-card'>
      <div>
        <span className='advantage-card__badge'>Фермерские продукты</span>
        <p className='advantage-card__title'>Еда намного вкуснее</p>
      </div>
      <p className='advantage-card__text'>
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина —
        два настолько разных продукта, что они даже не родственники
      </p>
    </article>
  );
}

export default AdvantageCard;
