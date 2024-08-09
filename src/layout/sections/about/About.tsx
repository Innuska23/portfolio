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
                            I am an experienced Junior Full-stack Developer
                            proficient in HTML, CSS, SASS, JavaScript, React,
                            Node.js, mongoose and Express. With a focus on clean
                            and modular coding practices, I am committed to
                            delivering high-quality web solutions that meet user
                            expectations and adhere to industry best practices
                        </S.AboutMeText>

                        <UserExperience />

                    </S.AboutBox>

                </FlexContainer>
            </Container>
        </S.About>
    )
}

