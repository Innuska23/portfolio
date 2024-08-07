import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { Fade } from "react-awesome-reveal";

import { S } from "./Footer_Styles"

const contactData = [
    { href: "tel:+380 66 156 7600", text: "+380 66 156 7600" },
    { href: "mailto:inna.dmytrenko@ukr.net", text: "inna.dmytrenko@ukr.net" }
];

const footerItems = [
    { items: "Home", href: "home" },
    { items: "About", href: "about" },
    { items: "Tech Stack", href: "tech-stack" },
    { items: "Projects", href: "projects" },
    { items: "Contact", href: "contact" }
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.Wrapper></S.Wrapper>
                <FlexContainer justify={'space-between'} align={"center"} wrap={"wrap"}>
                    <Logo idLogo="logoFooter" />
                    <S.SocialContactsItemList>
                        {contactData.map((contact, index) => (
                            <S.SocialContactsItem key={index}>
                                <S.SocialLink href={`#${contact.href}`}>{contact.text}</S.SocialLink>
                            </S.SocialContactsItem>
                        ))
                        }
                        <S.SocialIconContainer>
                            <SocialIcon color={"#42446E"} hoverColor={"#666"} />
                        </S.SocialIconContainer>
                    </S.SocialContactsItemList>
                </FlexContainer>

                <FlexContainer
                    justify={'space-between'}
                    align={"center"}
                    wrap={"wrap"}
                    padding={"0 15px"}>
                    <S.NavigationList>
                        {footerItems.map((item, index) => (
                            <S.NavigationFooterItem key={index}>
                                <S.NavigationFooterLink
                                    to={item.href}
                                    smooth={true}
                                    spy={true}>{item.items}</S.NavigationFooterLink>
                            </S.NavigationFooterItem>
                        ))}
                    </S.NavigationList>
                    <S.Copyright>
                        Designed and built by <S.CopyrightSpan>Inna Dmytrenko</S.CopyrightSpan> with{" "}
                        <Fade>
                            <S.CopyrightHeart>&#10084;&#65039;</S.CopyrightHeart>
                        </Fade>
                        & <S.CopyrightSpan>Coffee</S.CopyrightSpan>
                    </S.Copyright>
                </FlexContainer>
            </Container>
        </S.Footer>
    );
};
