import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    --bgGeral:#6c91bf;
    --bgSideBar: #af2bbf;
    --bgConteudo: #5bc8af;
    background-color: var(--bgGeral);
    font-family: sans-serif;
    color: #fbfbfb;

    

    a{
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
   }
`;
