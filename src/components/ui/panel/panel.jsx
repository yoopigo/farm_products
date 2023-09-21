import styled from 'styled-components';
import { Section } from '../../styled/index';

const Panel = styled(Section)`
  display: block;
  min-width: ${(props) =>
    props.minWidth !== undefined ? props.minWidth + 'px' : 'auto'};
  padding-top: ${(props) => `${props.paddingTop}px`};
  padding-left: 20px;
  padding-bottom: ${(props) => `${props.paddingBottom}px`};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colorWhite};
`;

export default Panel;
