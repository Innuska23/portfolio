import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

import photoBg from "../../../assets/images/abstract.webp";

const Main = styled.main`
    margin-top: 255px;

    @media ${theme.media.mobile} {
        margin-top: 179px;
    }
`;

const About = styled.h2`
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 36,
    lineHeight: "121%",
})}
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
    width: 628px;
    height: 628px;
    background-image: url(${photoBg});
    background-repeat: no-repeat;

    position: absolute;
    bottom: -100px;
    left: -250px;
    z-index: -1;

    @media (max-width: 1234px) {
        display: none;
    }
}
`;

const Photo = styled.img`
    border-radius: 230px;
    width: 349px;
    height: 349px;
    object-fit: cover;
    margin-bottom: -20px;
    margin-right: 18px;

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
