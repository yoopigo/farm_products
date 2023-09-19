import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Section;
