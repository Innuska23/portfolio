import styled, { keyframes } from "styled-components";
import { theme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

import photoBg from "../../../assets/images/abstract.webp";

const waveAnimation = keyframes`
    0% { transform: rotate(0deg); }
    10% { transform: rotate(16deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(16deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`;

const Main = styled.section`
    padding: 250px 0 100px;
    overflow: hidden;
    position: relative;

    @media ${theme.media.tablet} {
        padding: 100px 0 50px;
    }
`;

// const HomeContainer = styled.div`
// display: flex;
// flex-wrap: wrap;
// height: 100%;
// align-items: center;
// justify-content: space-between;
// padding: 45px 0 0 0;

// @media ${theme.media.tablet}{
//     justify-content: center;
//     align-items: center;
//     gap: 50px;
// }
// `

const About = styled.div`
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 32,
    lineHeight: "121%",
})}
    @media (max-width: 900px) {
        margin-bottom: 30px;
    }

`;

const Greeting = styled.p`
    
`;

const WavingHand = styled.span`
display: inline-block;
animation: ${waveAnimation} 3.0s infinite;
transform-origin: 75% 75%;
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
    // HomeContainer,
    About,
    Description,
    IntroText,
    Greeting,
    WavingHand,
    Name,
    PhotoWrapper,
    Photo
}
