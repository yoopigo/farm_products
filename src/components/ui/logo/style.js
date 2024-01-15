import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 44px;

  &:hover {
    text-decoration: none;
  }
`;

const LogoText = styled.span`
  text-decoration: none;
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
  color: ${(props) => props.theme.colorBlack};
`;

export { LogoLink, LogoText };
