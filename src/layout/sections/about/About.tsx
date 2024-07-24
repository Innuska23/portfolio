import styled from "styled-components"

import { UserExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"
import photoBg from '../../../assets/images/drawing.png'

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <StyledAboutBox>
                    <SectionTitle text="start" font={'42px'}>About Me</SectionTitle>
                    <StyledAboutMeText>The Generator App is an online tool that helps you to export ready-made <br />templates ready to work as your future website. It helps you to combine slides, <br /> panels and other components and export it as a set of static files: <br /> HTML/CSS/JS.</StyledAboutMeText>
                    <UserExperience />
                </StyledAboutBox>
            </Container>

        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    margin-top: 200px;
`

const StyledAboutMeText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: ${theme.colors.secondaryText};
`

const StyledAboutBox = styled.div`
    gap: 38px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 0;
    
    &::after {
    content: "";
    width: 835px;
    height: 835px;
    background-image: url(${photoBg});
    background-repeat: no-repeat;

    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    top: 0px;
    right: -200px;
    z-index: -1;
    }
`