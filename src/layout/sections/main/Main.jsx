import styled from "styled-components";

import photo from "../../../assets/images/photo.webp";
import photoBg from "../../../assets/images/abstract.webp";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer
          align={"center"}
          justify={"space-between"}
          padding={"45px 0px 8px 0"}
          wrap={"wrap"}
        >
          <StyledAbout>
            Hi 👋, <br /> My name is <br />
            <StyledName> Inna Dmytrenko</StyledName> <br />I build things for
            web
          </StyledAbout>
          <PhotoWrapper>
            <Photo src={photo} alt="My photo" />
          </PhotoWrapper>
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  margin-top: 279px;
`;

const StyledAbout = styled.h2`
  ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 36,
    lineHeight: "121%",
  })}
`;

const StyledName = styled.span`
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::after {
    content: "";
    width: 628px;
    height: 628px;
    background-image: url(${photoBg});
    background-repeat: no-repeat;

    position: absolute;
    bottom: -100px;
    left: -200px;
    z-index: -1;

    @media (max-width: 1399px) {
      width: 450px;
      height: 450px;
      bottom: -50px;
      left: -100px;
      overflow: hidden;
    }
  }
`;

const Photo = styled.img`
  border-radius: 230px;
  width: 349px;
  height: 349px;
  object-fit: cover;
  margin-bottom: -36px;
  margin-right: 6px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 310px;
  }
`;
