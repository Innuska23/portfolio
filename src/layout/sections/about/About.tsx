import styled from "styled-components"

import { WorkExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle text="start">About Me</SectionTitle>
            <StyledAboutMeText>The Generator App is an online tool that helps you to export ready-made <br />templates ready to work as your future website. It helps you to combine slides <br />, panels and other components and export it as a set of static files: <br /> HTML/CSS/JS.</StyledAboutMeText>
            <WorkExperience />
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: #f8f7f7;
`

const StyledAboutMeText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    color: #666;
`