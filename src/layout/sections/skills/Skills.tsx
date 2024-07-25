import styled from "styled-components"

import { FlexContainer } from "../../../components/FlexContainer"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionParagraph } from "../../../components/SectionParagraph"
import { Skill } from "../../../components/skill/Skill"
import { Container } from "../../../components/Container"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionParagraph marginTop={"47px"}>Technologies I’ve been working with recently</SectionParagraph>
                <FlexContainer wrap={"wrap"} marginTop={"126px"}>
                    <Skill />
                </FlexContainer>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    margin-top: 200px;
`