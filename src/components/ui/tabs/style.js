import styled, { css } from 'styled-components';
import { Li } from '../../styled/index';

const TabsBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || 'none'};
  overflow-y: overlay;
`;

const TabButton = styled.button`
  padding: 12px 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  min-height: 37px;
  box-sizing: border-box;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: #88aa4d;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.backgroundColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #333333;
        `}
`;

export { TabsBlock, Content, TabButton, TabListItem };
