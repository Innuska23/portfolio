import styled from "styled-components"

import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

export const Contact = () => {
    return (
        <StyledContact id='contact'>
            <Container>
                <SectionTitle
                    font={"58px"}
                    color={"#1e0e62"}
                    letSps={"-0.02em"}
                >For any questions please mail me:</SectionTitle>
                <ContactText>
                    <ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</ContactLink>
                </ContactText>
            </Container>
        </StyledContact >
    )
}


const StyledContact = styled.section`
    margin-top: 184px;
    font-family: ${theme.font.secondFamily};
    line-height: 121%;
    letter-spacing: -0.02em;
`

const ContactText = styled.p`
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    margin-top: 9px;
    letter-spacing: -0.02em;
    text-align: center;
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ContactLink = styled.a`
    
`