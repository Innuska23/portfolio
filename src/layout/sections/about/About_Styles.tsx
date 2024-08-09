import styled from "styled-components"
import { theme } from "../../../styles/Theme.styled"
import { font } from "../../../styles/Common"

import photoBg from '../../../assets/images/drawing.webp'

const About = styled.section`
    position: relative !important;
    z-index: 100 !important;
    overflow: hidden;
    &::after {
        content: "";
        min-width: 835px;
        min-height: 905px;
        background-image: url(${photoBg});
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: -200px;
        z-index: -1;
        @media ${theme.media.tablet}{
            display: none;
        }
    }
`

const AboutBox = styled.div`
    max-width: 710px;
    gap: 38px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    z-index: 1;
    text-align: justify;

    @media ${theme.media.mobile}{
        gap: 15px;
    }
`

const AboutMeText = styled.p`
    ${font({
    weight: 400,
    Fmin: 14,
    Fmax: 18,
    lineHeight: "144%",
    color: `${theme.colors.secondaryText}`,
    letterSpacing: "0em"
})}
    text-indent: 25px;
    width: 100%;
`
export const S = {
    About,
    AboutBox,
    AboutMeText
}