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

import { S } from "./Project_Styles"

const projectDate = [
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog1
    },
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog2
    },
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog3
    },
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog4
    },
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog5
    },
    {
        title: 'Project Tile goes here',
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "HTML , JavaScript, SASS, React",
        src: prog6
    }

]

export const Projects: React.FC = () => {
    return (
        <S.Project id="projects">
            <Container>
                <SectionTitle
                    lineH={"54%"}
                    font={"48px"}>Projects</SectionTitle>
                <SectionParagraph>Things I’ve built so far</SectionParagraph>
                <S.ProjectsGrid >
                    {projectDate.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            text={project.text}
                            stack={project.stack}
                            src={project.src} />
                    ))}
                </S.ProjectsGrid >
            </Container>
        </S.Project>
    )
}
