import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  background-color: ${(props) => props.theme.colorButton};
  min-height: 60px;

  min-width: ${(props) => props.$minWidth || '100%'};
  color: ${(props) => props.theme.colorWhite};
  cursor: pointer;
  font-weight: 700;
  border: 0;
  font-size: ${(props) => props.theme.fontSizeDefault};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  align-self: center;

  &:hover {
    background-color: ${(props) => props.theme.colorHoverArFocusButton};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
    background-color: ${(props) => props.theme.colorHoverArFocusButton};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: #fc9b27;
    cursor: default;
  }
`;

export default StyledButton;
