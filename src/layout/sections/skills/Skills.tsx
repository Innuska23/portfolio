import { FlexContainer } from "../../../components/FlexContainer"
import { SectionTitle } from "../../../components/SectionTitle"
import { SectionParagraph } from "../../../components/SectionParagraph"
import { Skill } from "../../../components/skill/Skill"
import { Container } from "../../../components/Container"

import { S } from "./Skills_Styles"


export const Skills: React.FC = () => {
    return (
        <S.Skills id='tech-stack'>
            <Container>
                <SectionTitle
                    lineH={"54%"}>My Tech Stack</SectionTitle>
                <SectionParagraph>Technologies I’ve been working with recently</SectionParagraph>
                <FlexContainer
                    wrap={"wrap"}
                    align={"center"}
                    justify={"center"}>
                    <Skill />
                </FlexContainer>
            </Container>
        </S.Skills>
    )
}
