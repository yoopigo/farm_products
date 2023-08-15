import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;

}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: ${(props) => props.theme.fontWeightDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.colorBlack};
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

`;
