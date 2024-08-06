import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const StyledGoToTop = styled.button`
    background-color: ${theme.colors.primaryText};
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    z-index: 9999999;
    
    :hover{
        background-color: ${theme.colors.secondaryText};
    }
`

export const S = {
    StyledGoToTop
}