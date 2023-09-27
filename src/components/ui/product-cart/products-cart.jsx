import React from 'react';
import { TitleSize } from '../../ui/title/title';

import {
  ProductImage,
  ProductTitle,
  Price,
  ContentWrapper,
  StyledProductCart,
} from './style';
import Tabs from '../tabs/tabs';
import OptionsList from '../../ui/option-list/option-list';

export default function ProductCart({ product }) {
  const tabsList = [
    {
      title: 'Oписание',
      content: product.description,
    },
    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: 'Свойства',
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <StyledProductCart>
      <ProductImage src={product.image} alt={product.name}></ProductImage>
      <ContentWrapper>
        <ProductTitle level={2} size={TitleSize.SMALL} lineHeight={31}>
          {product.name}
        </ProductTitle>
        <Tabs />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </StyledProductCart>
  );
}
