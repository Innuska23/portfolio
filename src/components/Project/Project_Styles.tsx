import styled from "styled-components"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common"

const Project = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.colors.shadow};
    background: ${theme.colors.primaryBg};
    border-radius: 20px;
    max-width: 375px;
    min-height: 575px;
    height: 100%;
    flex-grow: 1;
    letter-spacing: 0em;
    justify-content: space-between;
    transition: ${theme.animations.transition};
    text-align: justify;
    
    &:hover {
    transform: scale(1.1);
    }
`

const ImageLink = styled.a`
    display: inline-block;
    width: 100%;
    cursor: pointer;
`;

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 265px;
    object-fit: cover;
`

const BoxText = styled.div`
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

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
    text-indent: 25px;
    flex-grow: 1;

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
    margin-bottom: 15px;

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
    justify-content: space-between;
    margin-top: auto;

    @media ${theme.media.mobile} {
        margin-top: auto;
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
    text-decoration-skip-ink: none;
    align-items: center;
    transition: ${theme.animations.transition};

    :hover{
        text-decoration: underline;
        transition: ${theme.animations.transition};
        color: ${theme.colors.primaryText};
    }
`

const IconSpan = styled.span`
    margin-left: 10px;
`

export const S = {
    Project,
    ImageLink,
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