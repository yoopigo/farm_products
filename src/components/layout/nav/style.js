import styled from 'styled-components';
import Button from '../../ui/button/button';

export const StyledButton = styled(Button)`
  position: relative;
  display: inline-block;
  padding: 0;
  width: auto;
  min-width: 0;
  background-color: white;
  color: black;
  font-size: 18px;
  line-height: 1;
  min-height: 18px;
  padding-top: 21px;
  padding-bottom: 21px;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 19px;
    height: 1px;
    background-color: none;
    color: black;
    transition: opacity 0.2s ease-out;
    content: '';
  }

  &:hover,
  &:active {
    background-color: white;

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;
