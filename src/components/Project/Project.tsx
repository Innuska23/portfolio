import styled from "styled-components"

import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme.styled"

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
    width: 100%;
    max-height: 570px;
`

const Image = styled.img`
    border-radius: 20px 20px 0 0;
    max-width: 375px;
    max-height: 260px;
    object-fit: cover;
`
const BoxText = styled.div`
    padding-bottom: 25px;
    padding-top: 27px;
    padding-left: 30px;
    padding-right: 30px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;
    color: ${theme.colors.darkColor};
`

const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
    margin-top: 17px;
    color: ${theme.colors.secondaryText};
`

const Stack = styled.p`
    font-weight: 300;
    font-size: 14px;
    margin-top: 12px;
`
const StackBold = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    color: ${theme.colors.primaryText};
`

const ButtonContainer = styled.div`  
    display: flex;
    gap: 48px;
    margin-top: 21px;
    align-items: center
`

const Link = styled.a`
    display: flex;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.darkColor};
    align-items: center;
`

const IconSpan = styled.span`
    margin-left: 10px;
`