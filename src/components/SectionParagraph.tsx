import styled from "styled-components";

import { theme } from "../styles/Theme.styled";
import { font } from "../styles/Common";

// type SectionParagraphPropsType = {
//     marginTop?: string
// }

export const SectionParagraph = styled.p`
    ${font({ weight: 400, Fmax: 32, lineHeight: "81%", Fmin: 20, color: `${theme.colors.secondaryText}` })}

    text-align: center;
    margin-top: 50px;
    @media ${theme.media.mobile} {
        margin-top: 20px;
    }
`