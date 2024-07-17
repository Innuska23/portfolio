import styled from "styled-components";

import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"}>
        <div>
          <MainTitle>Software Developer</MainTitle>
          <Name>Hello, my name is Vahid Navazan</Name>
          <span>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </span>
          <div>
            <button>Projects</button>
            <button>LinkedIn</button>
          </div>
        </div>

        <Photo src={photo} alt="" />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;
