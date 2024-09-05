import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before, *::after{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", system-ui;
    font-size: 14px;
    color: ${(p) => p.theme.colors.text};
}

ul{
    list-style: none;
}

body{
    background-color: ${(p) => p.theme.colors.bg};
}
`;
