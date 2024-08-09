import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const Header = styled.header<{ scrolled: boolean }>`
    position: fixed;
    padding: 41px 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${props => props.scrolled ? `${theme.colors.grayBg}` : `${theme.colors.primaryBg}`};
    transition: ${theme.animations.transition};
    
    @media ${theme.media.tablet} {
        padding: 25px 0;
    }
`

export const S = {
    Header
}