/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { Label, Section } from '../../styled/index';
import TextInput from '../../ui/text-input/text-input';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import checkboxSelect from '../../../assets/checkbox.svg';

const StyledBuyPage = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerWidth};
  bottom: ${(props) => props.theme.footerWidth};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

const LeftColumn = styled.div`
  width: 353px;
  padding-left: ${(props) => props.theme.pagePadding};
  overflow-y: overlay;
  max-height: 100%;
  padding: 0;
`;

const AddressInput = styled(TextInput)`
  margin-bottom: 20px;
  margin-top: 24px;
`;

const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 8px;
`;

const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const ProductSwiper = styled(Swiper)`
  width: 727px;
  margin-left: 20px;
  overflow: hidden;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export { StyledBuyPage, LeftColumn, AddressInput, PriceLabel, PriceValue, ProductSwiper, CheckboxLabel };
