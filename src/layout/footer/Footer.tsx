import { FlexContainer } from "../../components/FlexContainer";
import { SocialIcon } from "../../components/socialIcon/SocialIcon";
import { Container } from "../../components/Container";

import { S } from "./Footer_Styles"
import { Logo } from "../../components/logo/Logo";

const contactData = [
    { href: "tel:+91 12345 09876", text: "+91 12345 09876" },
    { href: "mailto:info@example.com", text: "info@example.com" }
];

const footerItems = [
    { items: "Home", href: "/" },
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
                    marginTop={"89px"}
                    wrap={"wrap"}
                    padding={"0 15px"}>
                    <S.NavigationList>
                        {footerItems.map((item, index) => (
                            <S.NavigationFooterItem key={index}>
                                <S.NavigationFooterLink href={item.href}>{item.items}</S.NavigationFooterLink>
                            </S.NavigationFooterItem>
                        ))}
                    </S.NavigationList>
                    <S.Copyright>
                        Designed and built by <S.CopyrightSpan>Pavan MG</S.CopyrightSpan> with{" "}
                        <S.CopyrightSpan>Love</S.CopyrightSpan> & <S.CopyrightSpan>Coffee</S.CopyrightSpan>
                    </S.Copyright>
                </FlexContainer>
            </Container>
        </S.Footer>
    );
};
