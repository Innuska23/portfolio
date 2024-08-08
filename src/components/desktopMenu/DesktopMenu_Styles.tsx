import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme.styled"

const DesktopMenu = styled.nav`
    ${font({
    weight: 500,
    lineHeight: "130%",
    family: `${theme.font.secondFamily}`,
})}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 790px;
    width: 100%;
    padding-bottom: 25px;
`

const SocialIconContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 5px;

    @media (max-width: 850px) {
        gap: 10px;
    }
`

export const S = {
    DesktopMenu,
    SocialIconContainer
} 