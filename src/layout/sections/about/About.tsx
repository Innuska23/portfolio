import styled from "styled-components"

import { UserExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import photoBg from '../../../assets/images/drawing.webp'
import { FlexContainer } from "../../../components/FlexContainer"
import { font } from "../../../styles/Common"

export const About = () => {
    return (
        <StyledAbout id="about">
            <Container>
                <FlexContainer wrap="wrap">
                    <StyledAboutBox>
                        <SectionTitle
                            text={"start"}
                            letSps={"0.0em"}>About Me</SectionTitle>
                        <StyledAboutMeText>
                            The Generator App is an online tool that helps you to export ready-made
                            templates ready to work as your future website. It helps you to combine slides,
                            panels and other components and export it as a set of static files: <br />
                            HTML/CSS/JS.
                        </StyledAboutMeText>
                        <UserExperience />
                    </StyledAboutBox>
                </FlexContainer>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    position: relative;
    overflow: hidden;
`


const StyledAboutBox = styled.div`
    max-width: 710px;
    gap: 38px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    z-index: 1;
    @media ${theme.media.mobile}{
        gap: 15px;
    }

    &::after {
        content: "";
        width: 835px;
        height: 835px;
        background-image: url(${photoBg});
        background-repeat: no-repeat;
        /* background-size: contain;
        background-size: 100% 100%; */
        position: absolute;
        top: 271px;
        right: -928px;
        transform: translateY(-50%);
        z-index: -1;
        @media ${theme.media.tablet}{
            display: none;
        }
    }
`

const StyledAboutMeText = styled.p`
    ${font({
    weight: 400,
    Fmin: 14,
    Fmax: 18,
    lineHeight: "144%",
    color: `${theme.colors.secondaryText}`,
    letterSpacing: "0em"
})}
`
