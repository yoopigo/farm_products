import styled from 'styled-components';
import People from '../../../assets/about/people.svg';

const StyledAbout = styled.section`
  position: relative;
  padding: 183px 553px 183px 90px;
  background-color: ${(props) => props.theme.colorBlueBackground};
  gap: 24px;
  box-sizing: border-box;
  min-height: 600px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 447px;
    background: ${(props) => props.theme.colorDarkBlue};
    width: 446px;
    height: 447px;
    right: 90px;
    top: 75px;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 620px;
    width: 273px;
    background: url(${People}) no-repeat;
    top: 37px;
    right: 177px;
    z-index: 2;
  }
`;

const StyledAboutWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const StyledAboutText = styled.p`
  margin: 0;
`;

export { StyledAbout, StyledAboutWrapper, StyledAboutText };
