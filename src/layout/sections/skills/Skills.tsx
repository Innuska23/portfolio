import styled from "styled-components"
import { FlexContainer } from "../../../components/FlexContainer"
// import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionParagraph } from "../../../components/SectionParagraph"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
            <FlexContainer wrap={"wrap"}>
                <Skill />
                {/* <Skill>
                    <Icon iconId="vsCodeSvg" />
                </Skill> */}
            </FlexContainer>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    /* width: 45%; */
    
`