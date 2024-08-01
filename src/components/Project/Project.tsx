import styled from "styled-components"

import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common"

type ProjectTypeProps = {
    title: string
    text: string
    src: string
    stack: string
}

export const Project = (props: ProjectTypeProps) => {
    return (
        <StyledProject>
            <Image alt="" src={props.src} />
            <BoxText>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Stack>
                    <StackBold>Tech stack: </StackBold>
                    {props.stack}</Stack>
                <ButtonContainer>
                    <Link href={"#"}>
                        <Icon iconId="linkChain" height="20" width="20" viewBox="0 0 20 20" />
                        <IconSpan>Live Preview</IconSpan>
                    </Link>
                    <Link href={"#"}>
                        <Icon iconId="githubFill" height="20" width="20" viewBox="0 0 20 20" />
                        <IconSpan>View Code</IconSpan>
                    </Link>
                </ButtonContainer>
            </BoxText>

        </StyledProject>
    )
}

const StyledProject = styled.div`
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 20px;
    max-width: 375px;
    flex-grow: 1;
    /* width: 100%; */
`

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    width: 100%;
    /* max-width: 375px; */
    /* max-height: 260px; */
    object-fit: cover;
`
const BoxText = styled.div`
    padding: 27px 30px 25px 30px;

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
    color: `${theme.colors.darkColor}`
})}
`

const Text = styled.p`
    ${font({
    weight: 300,
    Fmax: 18,
    Fmin: 14,
    lineHeight: "144%",
    color: `${theme.colors.secondaryText}`
})}
    margin-top: 17px;

    @media ${theme.media.mobile} {
        margin-top: 15px;
    }
`

const Stack = styled.p`
 ${font({
    weight: 300,
    Fmax: 14,
    Fmin: 14,
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
    color: `${theme.colors.primaryText}`
})}
`

const ButtonContainer = styled.div`  
    display: flex;
    gap: 48px;
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
    Fmin: 14,
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