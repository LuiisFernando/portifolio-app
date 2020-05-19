import { createGlobalStyle } from 'styled-components';

import './fonts.scss';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100% !important;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100% !important;
    height: 100% !important;
    /* background: #191414; */
  }
  body, input, button {
    font-family: 'Poppins Medium', sans-serif;
    /* color: #999999; */
  }

`;