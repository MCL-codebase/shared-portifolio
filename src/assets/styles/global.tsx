import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-background: #272727;
    --color-primary-lighter: ##FAC000;
    --color-primary-light: ##ffc913;
    --color-primary: #f8c000;
    --color-primary-dark: #ffd700;
    --color-primary-darker: #c39800;
    --color-secundary-lighter:#101010;
    --color-secundary: #030303;
    --color-secundary-darker: #000;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #262626;
    --color-text-title: #32264D;
    --color-text-complement: #000000;
    --color-text-base: #32264d;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #966e1e;
    --color-box-footer: #6c4f16;
    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    background: var(--color-background);
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:100vh;
  }
  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base)
  }
  .container {
    width: 90vw;
    max-width: 700px;
  }
  @media (min-width: 700px) {
      :root {
        font-size: 62.5%;
      }
    }
  `;