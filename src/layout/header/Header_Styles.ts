import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const Header = styled.header<{ scrolled: boolean }>`
    position: fixed;
    padding: 41px 5px 0 5px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${props => props.scrolled ? '#c2c2c2e3' : 'transparent'};
    @media ${theme.media.tablet} {
        padding-top: 0;
    }
`

export const S = {
    Header
}