import React from "react";
import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";

import Typewriter from 'typewriter-effect';

import { S } from "./Home_Styles";

export const Home: React.FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexContainer
          align="center"
          justify="space-between"
          padding="45px 0 0 0"
          wrap="wrap"
        >
          <S.About>
            <S.Greeting>Hi <S.WavingHand>👋</S.WavingHand>,</S.Greeting>
            <S.IntroText>My name is</S.IntroText>
            <S.Name>Inna Dmytrenko</S.Name>
            <Typewriter
              options={{
                strings: ["A Frontend Developer"],
                autoStart: true,
                loop: true,
                delay: 150,
              }}
            />
            <S.Description>A Frontend Developer</S.Description>
          </S.About>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="My photo" />
          </S.PhotoWrapper>
        </FlexContainer>
      </Container>
    </S.Main >
  );
};