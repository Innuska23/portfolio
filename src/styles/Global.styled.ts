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
    line-height: 1.2;
    color: ${theme.colors.secondaryText};
    font-family: "Poppins", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    padding: 100px 0;
    background-color: ${theme.colors.primaryBg};
    @media ${theme.media.tablet} {
        padding: 50px 0;
    }
}
`

