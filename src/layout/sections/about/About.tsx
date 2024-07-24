import styled from "styled-components"

import { UserExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle text="start" font={'42px'}>About Me</SectionTitle>
                <StyledAboutMeText>The Generator App is an online tool that helps you to export ready-made <br />templates ready to work as your future website. It helps you to combine slides, <br /> panels and other components and export it as a set of static files: <br /> HTML/CSS/JS.</StyledAboutMeText>
                <UserExperience />
            </Container>

        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: #f8f7f7;
    margin-top: 200px;
`

const StyledAboutMeText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 144%;
    margin-top: 38px;
    color: ${theme.colors.secondaryText};
`