import styled from "styled-components"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common"

const Project = styled.div`
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 20px;
    max-width: 375px;
    flex-grow: 1;
    letter-spacing: 0em;
`

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    object-fit: cover;
`
const BoxText = styled.div`
    padding: 25px 30px;

    @media ${theme.media.mobile} {
        padding: 20px 25px;
    }
`

const Title = styled.h3`
    ${font({
    weight: 500,
    Fmax: 28,
    Fmin: 20,
    lineHeight: "93%",
    color: `${theme.colors.darkColor}`,
    letterSpacing: "0em",
})}
`

const Text = styled.p`
    ${font({
    weight: 300,
    Fmax: 18,
    Fmin: 14,
    lineHeight: "144%",
    color: `${theme.colors.secondaryText}`,
    letterSpacing: "0em",
})}
    margin-top: 18px;

    @media ${theme.media.mobile} {
        margin-top: 15px;
    }
`

const Stack = styled.p`
    ${font({
    weight: 300,
    Fmax: 14,
    Fmin: 14,
    letterSpacing: "0em",
})}
    margin-top: 12px;

    @media ${theme.media.mobile} {
        margin-top: 10px;
    }
`
const StackBold = styled.span`
    ${font({
    weight: 400,
    Fmax: 16,
    Fmin: 14,
    lineHeight: "162%",
    color: `${theme.colors.primaryText}`,
    letterSpacing: "0em",
})}
`

const ButtonContainer = styled.div`  
    display: flex;
    gap: 55px;
    margin-top: 21px;
    align-items: center;

    @media ${theme.media.mobile} {
        margin-top: 15px;
    }
`

const Link = styled.a`
${font({
    weight: 400,
    Fmax: 16,
    Fmin: 12,
    lineHeight: "162%",
    color: `${theme.colors.darkColor}`
})}
    display: flex;
    cursor: pointer;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    align-items: center;
`

const IconSpan = styled.span`
    margin-left: 10px;
`

export const S = {
    Project,
    Image,
    BoxText,
    Title,
    Text,
    Stack,
    StackBold,
    ButtonContainer,
    Link,
    IconSpan
}