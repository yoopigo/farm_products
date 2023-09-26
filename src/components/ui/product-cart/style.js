import styled from 'styled-components';
import { Img } from '../../styled/index';
import Title from '../../ui/title/title';

const StyledProductCart = styled.div`
  width: 727px;
  min-height: 288px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colorWhite};
  gap: 12px;
  flex-direction: row;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  width: 419px;
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  line-height: 21px;
  background-color: ${(props) => props.theme.colorBlueBackground};
`;

export { StyledProductCart, ProductImage, ContentWrapper, ProductTitle, Price };
