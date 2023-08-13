import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colorButton};
  min-height: 60px;
  min-width: 260px;
  color: ${(props) => props.theme.colorWhite};
  font-size: 18px;
  border: 0;
  text-decoration: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 700;
  line-height: 150%;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colorHoverArFocusButton};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
    background-color: ${(props) => props.theme.colorHoverArFocusButton};
  }
`;

export default StyledButton;
