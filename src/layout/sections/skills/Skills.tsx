import styled from "styled-components"

import { FlexContainer } from "../../../components/FlexContainer"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionParagraph } from "../../../components/SectionParagraph"
import { Skill } from "../../../components/skill/Skill"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
            <FlexContainer wrap={"wrap"}>
                <Skill />
            </FlexContainer>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    /* width: 45%; */
    min-height: 100vh;
    background-color: #c6c898;
`