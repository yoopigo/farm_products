import styled from 'styled-components';

const StyledFooter = styled.div`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorWhite};
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export { StyledFooter, FooterWrapper };
