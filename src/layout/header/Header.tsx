// import React, { useState, useEffect } from "react";
// import { Logo } from "../../components/logo/Logo";
// import { Container } from "../../components/Container";
// import { FlexContainer } from "../../components/FlexContainer";
// import { MobileMenu } from "../../components/mobileMenu/MobileMenu";
// import { DesktopMenu } from "../../components/desktopMenu/DesktopMenu";
// import { S } from "./Header_Styles";

// import { useWindowSize } from "../../components/hooks/useWindowSize";


// export const Header: React.FC = () => {
//     const { width } = useWindowSize()
//     const [scrolled, setScrolled] = useState(false);
//     const breakpoint = 768;

//     useEffect(() => {
//         const handleScroll = () => {
//             const isScrolled = window.scrollY > 200;
//             if (isScrolled !== scrolled) {
//                 setScrolled(isScrolled);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [scrolled]);

//     return (
//         <S.Header scrolled={scrolled}>
//             <Container>
//                 <FlexContainer justify="space-between" align="center">
//                     <Logo />
//                     {width < breakpoint ? (
//                         <MobileMenu aria-label="Mobile Menu" />
//                     ) : (
//                         <DesktopMenu aria-label="Desktop Menu" />
//                     )}
//                 </FlexContainer>
//             </Container>
//         </S.Header>
//     );
// };
import React, { useState, useEffect } from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexContainer } from "../../components/FlexContainer";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";
import { DesktopMenu } from "../../components/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles";
import { useWindowSize } from "../../components/hooks/useWindowSize";

export const Header: React.FC = () => {
    const { width } = useWindowSize();
    const [scrolled, setScrolled] = useState(false);
    const breakpoint = 768;

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
                    <Logo />
                    {width < breakpoint ? (
                        <MobileMenu aria-label="Mobile Menu" />
                    ) : (
                        <DesktopMenu aria-label="Desktop Menu" />
                    )}
                </FlexContainer>
            </Container>
        </S.Header>
    );
};
