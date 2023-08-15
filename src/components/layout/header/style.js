import styled from 'styled-components';

const StyledHeader = styled.header`
  width: ${(props) => props.theme.pageWidth};
  background-color: ${(props) => props.theme.colorWhite};
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

export default StyledHeader;
