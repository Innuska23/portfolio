import React from "react";
import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";

import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

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
          <Tilt
            scale={1.1}
            transitionSpeed={2500}
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="My photo" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexContainer>
      </Container>
    </S.Main >
  );
};