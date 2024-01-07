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
import Button from '../../../components/ui/button/button';
import Title, { TitleSize } from '../../ui/title/title';
import ProductCart from '../../ui/product-cart/products-cart';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import CheckboxList from '../../ui/checkbox-list/checkbox-list';

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 500);
    }
  };

  const [address, setAddress] = useState('');

  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
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
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
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

          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Введите адрес доставки'
          />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue>{fullPrice} руб.</PriceValue>
          <Button
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        mousewheel={{ enabled: true }}
        direction={'vertical'}
        spaceBetween={12}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledBuyPage>
  ) : (
    'Продукты были слишком вкусные и их разобрали.'
  );
}

export default BuyPage;
