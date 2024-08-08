import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    cursor: pointer;
    background-image:  ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const LogoSpan = styled.span`
    margin: 0 5px;
    font-size: 24px; 
    font-weight: bold;
`;

export const S = {
    LogoContainer,
    LogoSpan
}