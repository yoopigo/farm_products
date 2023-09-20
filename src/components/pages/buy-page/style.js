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
`;

export { StyledBuyPage, LeftColumn };
