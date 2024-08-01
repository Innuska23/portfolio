import styled from "styled-components"

import { SectionParagraph } from "../../../components/SectionParagraph"
import { SectionTitle } from "../../../components/SectionTitle"
import { Project } from "../../../components/Project/Project"
import { Container } from "../../../components/Container"

import prog1 from '../../../assets/images/proj-1.webp'
import prog2 from '../../../assets/images/proj-2.webp'
import prog3 from '../../../assets/images/proj-3.webp'
import prog4 from '../../../assets/images/proj-4.webp'
import prog5 from '../../../assets/images/proj-5.webp'
import prog6 from '../../../assets/images/proj-6.webp'
import { theme } from "../../../styles/Theme.styled"

export const Projects = () => {
    return (
        <StyledProject id="projects">
            <Container>
                <SectionTitle
                    lineH={"54%"}
                    font={"48px"}>Projects</SectionTitle>
                <SectionParagraph>Things I’ve built so far</SectionParagraph>
                <ProjectsGrid >
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog1} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog2} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog3} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog4} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog5} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="HTML , JavaScript, SASS, React"
                        src={prog6} />
                </ProjectsGrid >
            </Container>
        </StyledProject>
    )
}

const StyledProject = styled.section`
`

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    gap: 62px 21px;
    justify-content: center;
    margin-top: 110px;
    align-items: center;
    justify-items: center; 

@media ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px 20px;
}

@media ${theme.media.mobile} {
    grid-template-columns: 1fr;
}
`