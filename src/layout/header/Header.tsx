import React from "react"

import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/Container"
import { FlexContainer } from "../../components/FlexContainer"
import { MobileMenu } from "../../components/mobileMenu/MobileMenu"
import { DesktopMenu } from "../../components/desktopMenu/DesktopMenu"

import { S } from './Header_Styles'


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);

    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo idLogo="logo" />
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                </FlexContainer>
            </Container>
        </S.Header>
    )
}
