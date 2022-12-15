import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins-Regular.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: Poppins, sans-serif;
    font-size: 1.6rem;
    
    ${(props) => css`
      background-color: ${props.theme.colors.background};
    `}
  }
`;
