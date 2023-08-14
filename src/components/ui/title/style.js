import styled from 'styled-components';
import { TitleSize } from './title';

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 115%;
  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.BIG) {
      fontSize = '44px';
    } else if (props.$size === TitleSize.NORMAL) {
      fontSize = '32px';
    } else if (props.$size === TitleSize.SMALL) {
      fontSize = '24px';
    }
    return fontSize;
  }};
`;

export default StyledTitle;
