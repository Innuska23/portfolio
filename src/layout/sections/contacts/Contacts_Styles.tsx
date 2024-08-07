import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme.styled"

const Contact = styled.section`
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
    transition: ${theme.animations.transition};

:hover {
    transition: ${theme.animations.transition};
    color: ${theme.colors.primaryText};
}
`

const ContactLink = styled.a`
    ${font({
    letterSpacing: "-0.02em",
    weight: 700,
    family: `${theme.font.secondFamily}`,
})}
`;

export const S = {
    Contact,
    ContactText,
    ContactLink
}