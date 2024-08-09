import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

import photoBg from "../../../assets/images/abstract.webp";

const waveAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(18deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const Main = styled.section`
    padding: 250px 0 100px;
    overflow: hidden;
    position: relative;

    @media ${theme.media.tablet} {
        padding: 100px 0 50px;
    }
`;

const About = styled.div`
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 26,
    lineHeight: "121%",
})}
    @media (max-width: 900px) {
        margin-bottom: 30px;       
        max-width: 770px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Greeting = styled.p`
    
`;

const WavingHand = styled.span`
display: inline-block;
animation: ${waveAnimation} 1.0s infinite;
transform-origin: 75% 75%;
animation-timing-function: ease-in-out;
`;

const Description = styled.p`
    display: none;
`

const IntroText = styled.p`
`

const Name = styled.h2`
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 32,
    lineHeight: "121%",
})}
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 100;
    background: ${theme.colors.gradient};
    border-radius: 230px;
    padding: 5px;

    @media (max-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
    }

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
    display: flex;
    justify-content: center;
    align-items: center;
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
    Description,
    IntroText,
    Greeting,
    WavingHand,
    Name,
    PhotoWrapper,
    Photo
}
