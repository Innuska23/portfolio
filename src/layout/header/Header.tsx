import styled from "styled-components"

import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { FlexContainer } from "../../components/FlexContainer"
import { MobileMenu } from "../../components/mobileMenu/MobileMenu"
import { theme } from "../../styles/Theme.styled"

const menuItems = [
    { items: "Home", href: "/" },
    { items: "About", href: "#about" },
    { items: "Tech Stack", href: "#tech-stack" },
    { items: "Projects", href: "#projects" },
    { items: "Contact", href: "#contact" }
];


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo idLogo="logo" />
                    <Menu menuItems={menuItems} />
                    <MobileMenu menuItems={menuItems} />
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    padding: 41px 5px 0 5px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    @media ${theme.media.tablet} {
        padding-top: 0;
    }
`
