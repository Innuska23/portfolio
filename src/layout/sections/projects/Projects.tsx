import { SectionParagraph } from "../../../components/SectionParagraph"
import { SectionTitle } from "../../../components/SectionTitle"
import { Project } from "../../../components/Project/Project"
import { Container } from "../../../components/Container"

import { projectDate } from "../../../components/data/data"

import { S } from "./Project_Styles"

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
