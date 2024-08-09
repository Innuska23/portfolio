import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { Fade } from "react-awesome-reveal";

import { contactData, menuItems } from "../../components/data/data";

import { S } from "./Footer_Styles";

export const Footer: React.FC = () => {
    return (
        <S.Footer aria-label="Footer">
            <Container>
                <S.Wrapper></S.Wrapper>
                <FlexContainer justify="space-between" align="center" wrap="wrap">
                    <Logo />

                    <S.LinkContainer>
                        <S.SocialContactsItemList>
                            {contactData.map((contact, index) => (
                                <S.SocialContactsItem key={index}>
                                    <S.SocialLink href={`#${contact.href}`} aria-label={`Contact via ${contact.text}`}>
                                        {contact.text}
                                    </S.SocialLink>
                                </S.SocialContactsItem>
                            ))}
                        </S.SocialContactsItemList>

                        <S.SocialIconContainer>
                            <SocialIcon color="#42446E" hoverColor="#666" aria-label="Social media links" />
                        </S.SocialIconContainer>
                    </S.LinkContainer>
                </FlexContainer>

                <FlexContainer
                    justify="space-between"
                    align="center"
                    wrap="wrap"
                    padding="0 15px">
                    <S.NavigationList role="navigation" aria-label="Footer navigation">
                        {menuItems.map((item, index) => (
                            <S.NavigationFooterItem key={index}>
                                <S.NavigationFooterLink
                                    to={item.href}
                                    smooth={true}
                                    spy={true}
                                    aria-label={`Navigate to ${item.items} section`}>
                                    {item.items}
                                </S.NavigationFooterLink>
                            </S.NavigationFooterItem>
                        ))}
                    </S.NavigationList>

                    <S.Copyright aria-label="Copyright information">
                        Developed by <S.CopyrightSpan>Inna Dmytrenko</S.CopyrightSpan> with{" "}
                        <Fade>
                            <S.CopyrightHeart aria-label="Heart symbol">&#10084;&#65039;</S.CopyrightHeart>
                        </Fade>
                        & <S.CopyrightSpan>Coffee</S.CopyrightSpan>
                    </S.Copyright>

                </FlexContainer>
            </Container>
        </S.Footer>
    );
};

