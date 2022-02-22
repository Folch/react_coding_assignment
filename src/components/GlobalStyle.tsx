import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto, Open-Sans, Helvetica, Sans-Serif;
  }
  html {
    height: 100%;
    background-color: ${props => (props.theme as { background_color: string }).background_color}
  }
`;