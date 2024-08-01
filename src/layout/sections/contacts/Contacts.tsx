import styled from "styled-components"

import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import { font } from "../../../styles/Common"

export const Contact = () => {
    return (
        <StyledContact id='contact'>
            <Container>
                <SectionTitle
                    font={"58px"}
                    color={"#1e0e62"}
                    letSps={"-0.02em"}
                    family={`${theme.font.secondFamily}`}
                >For any questions please mail me:</SectionTitle>
                <ContactText>
                    <ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</ContactLink>
                </ContactText>
            </Container>
        </StyledContact >
    )
}


const StyledContact = styled.section`
${font({
    family: `${theme.font.secondFamily}`,
    lineHeight: "121%",
    letterSpacing: "-0.02em"
})}
    font-family: "DM SANS";
    @media ${theme.media.mobile} {
        margin-top: 100px;
    }
`

const ContactText = styled.p`
${font({
    weight: 700,
    Fmax: 58,
    Fmin: 30,
    lineHeight: "121%",
    letterSpacing: "-0.02em",
})}

    margin-top: 9px;
    text-align: center;
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ContactLink = styled.a`
${font({
    letterSpacing: "-0.02em",
    weight: 700,
    family: `${theme.font.secondFamily}`,
})}
`