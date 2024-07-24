import styled from "styled-components";

import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme.styled";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer
          align={"center"}
          justify={"space-between"}
          padding={"45px 0px 8px 0"}
        >
          <div>
            <StyledAbout>
              Hi 👋, <br /> My name is <br />
              <StyledName> Inna Dmytrenko</StyledName> <br />I build things for
              web
            </StyledAbout>
          </div>

          <Photo src={photo} alt="" />
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  margin-top: 220px;
`;

const Photo = styled.img`
  border-radius: 230px;
  width: 349px;
  height: 349px;
  object-fit: cover;
`;

const StyledAbout = styled.h2`
  font-weight: 700;
  font-size: 58px;
  line-height: 121%;
  letter-spacing: -0.02em;
  color: ${theme.colors.primaryText};
`;

const StyledName = styled.span`
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
`;
