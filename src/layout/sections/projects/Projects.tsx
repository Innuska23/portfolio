import styled from "styled-components"

import { SectionParagraph } from "../../../components/SectionParagraph"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexContainer } from "../../../components/FlexContainer"
import { Project } from "../../../components/Project/Project"
import { Container } from "../../../components/Container"

import prog1 from '../../../assets/images/proj-1.webp'
import prog2 from '../../../assets/images/proj-2.webp'
import prog3 from '../../../assets/images/proj-3.webp'
import prog4 from '../../../assets/images/proj-4.webp'
import prog5 from '../../../assets/images/proj-5.webp'
import prog6 from '../../../assets/images/proj-6.webp'

export const Projects = () => {
    return (
        <StyledProject id="projects">
            <Container>
                <SectionTitle
                    lineH={"54%"}
                    font={"48px"}>Projects</SectionTitle>
                <SectionParagraph>Things I’ve built so far</SectionParagraph>
                <FlexContainer wrap="wrap" gap="34px" justify='center' marginTop={"110px"}>
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog1} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog2} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog3} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog4} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog5} />
                    <Project
                        title='Project Tile goes here'
                        text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack="JavaScript, SASS, React"
                        src={prog6} />
                </FlexContainer>
            </Container>
        </StyledProject>
    )
}

const StyledProject = styled.section`
`