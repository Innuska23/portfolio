import styled from "styled-components"

import { UserExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import photoBg from '../../../assets/images/drawing.webp'

export const About = () => {
    return (
        <StyledAbout id="about">
            <Container>
                <StyledAboutBox>
                    <SectionTitle text={"start"}>About Me</SectionTitle>
                    <StyledAboutMeText>
                        The Generator App is an online tool that helps you to export ready-made
                        templates ready to work as your future website. It helps you to combine slides,
                        panels and other components and export it as a set of static files:
                        HTML/CSS/JS.
                    </StyledAboutMeText>
                    <UserExperience />
                </StyledAboutBox>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    margin-top: 200px;
    position: relative;
    overflow: hidden;
`


const StyledAboutBox = styled.div`
    max-width: 710px;
    gap: 38px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    &::after {
        content: "";
        width: 835px;
        height: 835px;
        background-image: url(${photoBg});
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 300px;
        right: -830px;
        transform: translateY(-50%);
        z-index: -1;
        
        @media (max-width: 1200px) {
            width: 600px;
            height: 600px;
            /* right: -100px; */
        }
        
        @media (max-width: 768px) {
            width: 400px;
            height: 400px;
            right: -50px;
        }
    }
`

const StyledAboutMeText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: ${theme.colors.secondaryText};
`
