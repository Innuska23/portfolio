import styled from "styled-components";

import { theme } from "../styles/Theme.styled";
import { font } from "../styles/Common";

export const SectionParagraph = styled.p`
    ${font({
    weight: 400,
    Fmax: 32,
    lineHeight: "81%",
    Fmin: 20,
    color: `${theme.colors.secondaryText}`,
    letterSpacing: "0em"
})}

    text-align: center;
    margin-top: 30px;

    @media ${theme.media.mobile} {
        margin-top: 20px;
    }
`