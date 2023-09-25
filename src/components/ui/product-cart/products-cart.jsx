import React from 'react';
import { TitleSize } from '../../ui/title/title';

import {
  ProductImage,
  ProductTitle,
  Price,
  ContentWrapper,
  StyledProductCart,
} from './style';

export default function ProductCart({ product }) {
  return (
    <StyledProductCart>
      <ProductImage src={product.image}></ProductImage>
      <ContentWrapper>
        <ProductTitle level={2} size={TitleSize.SMALL} lineHeight={31}>
          {product.name}
        </ProductTitle>
        <Price>
          {' '}
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </StyledProductCart>
  );
}
