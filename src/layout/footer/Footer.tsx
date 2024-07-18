import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexContainer } from "../../components/FlexContainer"
import { SocialIcon } from "../../components/socialIcon/SocialIcon"

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexContainer justify={'space-between'} align={"center"}>
                <Icon iconId={"logoFooter"} height={"59"} width={"97"} viewBox={"0 0 59 97"} />
                <SocialContactsList>
                    <SocialContacts>
                        <SocialLink href="tel:+91 12345 09876">+91 12345 09876</SocialLink>
                    </SocialContacts>
                    <SocialContacts>
                        <SocialLink href="mailto:info@example.com">info@example.com</SocialLink>
                    </SocialContacts>
                    <SocialIcon />
                </SocialContactsList>
            </FlexContainer>
            <FlexContainer justify={'space-between'} align={"center"} gap={"164px"}>
                <ul>
                    {footerItems.map((item, index) => {
                        return <li key={index}>
                            <a href="#">{item}</a>
                        </li>
                    })}
                </ul>
                <Copyright>Designed and built by <CopyrightSpan>Pavan MG</CopyrightSpan> with <CopyrightSpan>Love</CopyrightSpan> & <CopyrightSpan>Coffee</CopyrightSpan></Copyright>
            </FlexContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
        ul {
            display: flex;
            gap: 30px;
        }
        div {
            display: flex;
        }
    
`
const SocialContactsList = styled.ul`
    display: flex;
    gap: 33px;
`
const SocialContacts = styled.li`
    
`
const SocialLink = styled.a`
`
const Copyright = styled.small`
    
`
const CopyrightSpan = styled.span`
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
b   background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`