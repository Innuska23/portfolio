import React from "react"
import { UserExperience } from "../../../components/workExperience/WorkExperience"
import { SectionTitle } from "../../../components/SectionTitle"
import { Container } from "../../../components/Container"
import { FlexContainer } from "../../../components/FlexContainer"

import { S } from "./About_Styles"

export const About: React.FC = () => {
    return (
        <S.About id="about">
            <Container>
                <FlexContainer wrap="wrap">
                    <S.AboutBox>
                        <SectionTitle
                            text={"start"}
                            letSps={"0.0em"}>About Me</SectionTitle>
                        <S.AboutMeText>
                            The Generator App is an online tool that helps you to export ready-made
                            templates ready to work as your future website. It helps you to combine slides,
                            panels and other components and export it as a set of static files: <br />
                            HTML/CSS/JS.
                        </S.AboutMeText>
                        <UserExperience />
                    </S.AboutBox>
                </FlexContainer>
            </Container>
        </S.About>
    )
}

