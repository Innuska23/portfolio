import React from "react";

import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";

import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.Main id="home">
      <Container>
        <FlexContainer
          align={"center"}
          justify={"space-between"}
          padding={"45px 0 0 0"}
          wrap={"wrap"}
        >
          <S.About>
            Hi 👋, <br /> My name is <br />
            <S.Name> Inna Dmytrenko</S.Name> <br />I build things for
            web
          </S.About>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="My photo" />
          </S.PhotoWrapper>
        </FlexContainer>
      </Container>
    </S.Main>
  );
};
