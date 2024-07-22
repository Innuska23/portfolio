import styled from "styled-components";

import { Icon } from "../../components/icon/Icon";
import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer justify={'space-between'} align={"center"}>
                <Icon iconId="logoFooter" height="59" width="97" viewBox="0 0 97 59" />
                <SocialContactsList>
                    <SocialContacts>
                        <SocialLink href="tel:+91 12345 09876">+91 12345 09876</SocialLink>
                    </SocialContacts>
                    <SocialContacts>
                        <SocialLink href="mailto:info@example.com">info@example.com</SocialLink>
                    </SocialContacts>
                    <SocialIconContainer>
                        <SocialIcon />
                    </SocialIconContainer>
                </SocialContactsList>
            </FlexContainer>

            <FlexContainer justify={'space-between'} align={"center"}>
                <NavigationList>
                    {footerItems.map((item, index) => (
                        <li key={index}>
                            <a href="#/">{item}</a>
                        </li>
                    ))}
                </NavigationList>
                <Copyright>
                    Designed and built by <CopyrightSpan>Pavan MG</CopyrightSpan> with{" "}
                    <CopyrightSpan>Love</CopyrightSpan> & <CopyrightSpan>Coffee</CopyrightSpan>
                </Copyright>
            </FlexContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #c89292;
    /* padding: 20px; */
`;


const SocialContactsList = styled.ul`
    display: flex;
    gap: 33px;
    align-items: center;
`;

const SocialContacts = styled.li``;

const SocialLink = styled.a``;


const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 15px;
`

const NavigationList = styled.ul`
    display: flex;
    gap: 52px;
`;

const Copyright = styled.small``;

const CopyrightSpan = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export default Footer;