import styled from "styled-components";

import { Icon } from "../../components/icon/Icon";
import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme.styled";
import { font } from "../../styles/Common";
// import { Logo } from "../../components/logo/Logo";

const footerItems = [
    { items: "Home", href: "/" },
    { items: "About", href: "#about" },
    { items: "Tech Stack", href: "#tech-stack" },
    { items: "Projects", href: "#projects" },
    { items: "Contact", href: "#contact" }
];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrapper></Wrapper>
                <FlexContainer justify={'space-between'} align={"center"} wrap={"wrap"}>
                    {/* <Logo color={"#42446"} /> */}
                    <Icon iconId="logoFooter" height="59" width="97" viewBox="0 0 97 59" />
                    <SocialContactsItemList>
                        <SocialContactsItem>
                            <SocialLink href="tel:+91 12345 09876">+91 12345 09876</SocialLink>
                        </SocialContactsItem>
                        <SocialContactsItem>
                            <SocialLink href="mailto:info@example.com">info@example.com</SocialLink>
                        </SocialContactsItem>
                        <SocialIconContainer>
                            <SocialIcon color={"#42446E"} hoverColor={"#666"} />
                        </SocialIconContainer>
                    </SocialContactsItemList>
                </FlexContainer>

                <FlexContainer
                    justify={'space-between'}
                    align={"center"}
                    marginTop={"91px"}
                    wrap={"wrap"}>
                    <NavigationList>
                        {footerItems.map((item, index) => (
                            <NavigationFooterItem key={index}>
                                <NavigationFooterLink href={item.href}>{item.items}</NavigationFooterLink>
                            </NavigationFooterItem>
                        ))}
                    </NavigationList>
                    <Copyright>
                        Designed and built by <CopyrightSpan>Pavan MG</CopyrightSpan> with{" "}
                        <CopyrightSpan>Love</CopyrightSpan> & <CopyrightSpan>Coffee</CopyrightSpan>
                    </Copyright>
                </FlexContainer>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    margin-top: 200px;

    @media ${theme.media.mobile} {
        margin-top: 100px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    
        &::after {
            content: "";
            width: 100%; 
            height: 2px;
            opacity: 0.3;
            background-color: ${theme.colors.secondaryText};
    
            position: absolute;
            top: 103px;
            right: 0px;
            z-index: 2;
        }
`;


const SocialContactsItemList = styled.ul`
    display: flex;
    gap: 33px;
    align-items: center;

    @media ${theme.media.tablet}{
        gap: 15px;
        flex-direction: column; 
        align-items: center;
    }
`;

const SocialContactsItem = styled.li``;

const SocialLink = styled.a`
    ${font({
    family: `${theme.font.secondFamily}`,
    Fmin: 12,
    Fmax: 18,
    weight: 400,
    lineHeight: "144%",
    color: `${theme.colors.primaryText}`
})}
    `;


const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 15px;

    @media ${theme.media.tablet}{
        align-items: center;
    }
`

const NavigationList = styled.ul`
    ${font({
    family: `${theme.font.secondFamily}`,
    Fmin: 12,
    Fmax: 18,
    lineHeight: "144%",
})}
    display: flex;
    flex-wrap: wrap;
    gap: 52px;

    @media ${theme.media.tablet} {
        display: none;
    }
    @media (max-width: 1234px) {
        gap: 20px;
    }

    a {
        ${font({ color: `${theme.colors.primaryText}` })}
    }
`;

const Copyright = styled.small`
 ${font({
    Fmin: 12,
    Fmax: 18,
})}
    @media ${theme.media.tablet} {
        text-align: center;  
        width: 100%;
    }
`;

const CopyrightSpan = styled.span`
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const NavigationFooterItem = styled.li`
    
`

const NavigationFooterLink = styled.a`
    ${font({
    color: `${theme.colors.primaryText}`
})}
`

export default Footer;