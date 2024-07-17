import styled from "styled-components";

import photo from "../../../assets/images/photo.webp";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"}>
        <div>
          <StyledAbout>
            Hi 👋, <br /> My name is <br />
            <StyledName> Pavan MG</StyledName> <br />I build things for web
          </StyledAbout>
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
  color: #42446e;
`;

const StyledName = styled.span`
  background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
`;
