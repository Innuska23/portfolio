import styled from "styled-components"
import { AboutMe } from "../../../components/aboutMe/AboutMe"
import { WorkExperience } from "../../../components/workExperience/WorkExperience"

export const About = () => {
    return (
        <StyledAbout>
            <AboutMe />
            <WorkExperience />
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`