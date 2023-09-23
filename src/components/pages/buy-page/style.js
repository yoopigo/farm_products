/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Label, Section } from '../../styled/index';
import TextInput from '../../ui/text-input/text-input';

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

export { StyledBuyPage, LeftColumn, AddressInput, PriceLabel, PriceValue };
