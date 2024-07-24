import styled from "styled-components"

import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import { Container } from "../../components/Container"
import { FlexContainer } from "../../components/FlexContainer"

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo />
                    <Menu menuItems={items} />
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #d4ffd3;
`