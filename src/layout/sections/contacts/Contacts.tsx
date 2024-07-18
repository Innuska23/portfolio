import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle font={"58px"}>For any questions please mail me:</SectionTitle>
            <ContactText>
                <ContactLink href="mailto:hi@pavanmg.in">hi@pavanmg.in</ContactLink>
            </ContactText>
        </StyledContact >
    )
}


const StyledContact = styled.section`
`

const ContactText = styled.p`
    font-weight: 700;
    font-size: 58px;
    line-height: 121%;
    letter-spacing: -0.02em;
    text-align: center;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ContactLink = styled.a`
    
`