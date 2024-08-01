import { theme } from './Theme.styled';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: ${theme.colors.primaryBg};
    padding: 41px 5px 0 5px;
    line-height: 1.2;
    padding-bottom: 60px;
    color: ${theme.colors.secondaryText};
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    overflow-x: hidden;


    min-width: 320px;
}

a,
ul,
li {
    text-decoration: none;
    list-style: none;
    transition: color 0.3s ease, transform 0.3s ease;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
}

section {
    margin-top: 200px;
    @media ${theme.media.mobile} {
        margin-top: 100px;
    }
}
`

