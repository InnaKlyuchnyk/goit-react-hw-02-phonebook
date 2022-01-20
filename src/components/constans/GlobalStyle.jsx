import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #212121;
    padding: 24px;
  }
  h1, h2, h3, h4, h5,h6, p{
    margin: 0;
  }
  ul, ol{
      list-style: none;
      padding: 0;
      margin: 0;
  }
  button{
      margin: 0;
  }
`