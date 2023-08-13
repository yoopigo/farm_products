import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 100px;
`;

export default Section;
