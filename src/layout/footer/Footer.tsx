import styled from "styled-components";

import { Icon } from "../../components/icon/Icon";
import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme.styled";

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrapper></Wrapper>
                <FlexContainer justify={'space-between'} align={"center"}>
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
                    marginTop={"91px"}>
                    <NavigationList>
                        {footerItems.map((item, index) => (
                            <NavigationFooterItem key={index}>
                                <NavigationFooterLink href="#/">{item}</NavigationFooterLink>
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
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    
        &::after {
            content: "";
            width: 1194px; 
            height: 2px;
            opacity: 0.3;
            background-color: #666666;
    
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
`;

const SocialContactsItem = styled.li``;

const SocialLink = styled.a`
    font-family: ${theme.font.secondFamily};
    font-size: 18px;
    font-weight: 400;
    line-height: 144%;
    color: ${theme.colors.primaryText}
    `;


const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 15px;
`

const NavigationList = styled.ul`
    display: flex;
    gap: 52px;
    font-family: ${theme.font.secondFamily};
    font-size: 18px;
    line-height: 144%;
    a {
    color: ${theme.colors.primaryText}
    }
`;

const Copyright = styled.small`
    font-size: 18px;
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
    color: ${theme.colors.primaryText};
`

export default Footer;