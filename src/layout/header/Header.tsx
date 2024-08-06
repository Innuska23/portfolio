import React, { useState, useEffect } from "react"

import { Logo } from "../../components/logo/Logo"
import { Container } from "../../components/Container"
import { FlexContainer } from "../../components/FlexContainer"
import { MobileMenu } from "../../components/mobileMenu/MobileMenu"
import { DesktopMenu } from "../../components/desktopMenu/DesktopMenu"

import { S } from './Header_Styles'

export const Header: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [scrolled, setScrolled] = useState(false);

    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 200;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    return (
        <S.Header scrolled={scrolled}>
            <Container>
                <FlexContainer justify="space-between" align="center">
                    <Logo idLogo="logo" />
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                </FlexContainer>
            </Container>
        </S.Header>
    )
}