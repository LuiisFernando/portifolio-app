import { createGlobalStyle } from 'styled-components';

import './fonts.scss';



export default createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap');

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