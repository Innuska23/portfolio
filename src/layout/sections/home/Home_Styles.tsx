import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

import photoBg from "../../../assets/images/abstract.webp";

const Main = styled.section`
    padding: 200px 0 100px;
    overflow: hidden;

    @media ${theme.media.tablet} {
        padding: 100px 0 50px;
    }
`;

const About = styled.h2`
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 36,
    lineHeight: "121%",
})}
    @media (max-width: 900px) {
        margin-bottom: 30px;
    }
`;

const Name = styled.span`
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::after {
    content: "";
    min-width: 770px;
    min-height: 770px;
    background-image: url(${photoBg});
    background-repeat: no-repeat;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
`;

const Photo = styled.img`
    border-radius: 230px;
    width: 350px;
    height: 350px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 310px;
    }
`;

export const S = {
    Main,
    About,
    Name,
    PhotoWrapper,
    Photo
}
