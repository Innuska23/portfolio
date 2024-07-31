import styled from "styled-components"

import { FlexContainer } from "../../../components/FlexContainer"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionParagraph } from "../../../components/SectionParagraph"
import { Skill } from "../../../components/skill/Skill"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme.styled"

export const Skills = () => {
    return (
        <StyledSkills id='tech-stack'>
            <Container>
                <SectionTitle
                    font={"48px"}
                    lineH={"54%"}>My Tech Stack</SectionTitle>
                <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
                <FlexContainer
                    wrap={"wrap"}
                    marginTop={"126px"}
                    align={"center"}
                    justify={"center"}>
                    <Skill />
                </FlexContainer>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    margin-top: 200px;
    @media ${theme.media.mobile} {
    margin-top: 100px;
    }
`