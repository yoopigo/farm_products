import React from 'react';
import { useState } from 'react';
import {
  StyledBuyPage,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel,
} from './style';
import Panel from '../../ui/panel/panel';
import Title, { TitleSize } from '../../ui/title/title';
import ProductCart from '../../ui/product-cart/products-cart';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Scrollbar, Pagination } from 'swiper/modules';
import products from '../../../mocks/products';
import CheckboxList from '../../ui/checkbox-list/checkbox-list';

function BuyPage({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
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
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={'select-products'}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
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
      <ProductSwiper
        direction={'vertical'}
        modules={[Mousewheel, Scrollbar, Pagination]}
        spaceBetween={12}
        slidesPerView={3}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledBuyPage>
  );
}

export default BuyPage;
