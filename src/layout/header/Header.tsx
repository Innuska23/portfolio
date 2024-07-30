import styled from "styled-components"

import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { FlexContainer } from "../../components/FlexContainer"

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
                    <Logo />
                    <Menu menuItems={menuItems} />
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    padding-top: 41px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
