import styled from "styled-components";

import { font } from "../styles/Common";

type SectionTitlePropsType = {
    font?: string
    text?: string
    color?: string
    lineH?: string
    letSps?: string
    family?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`

${font({ weight: 700, letterSpacing: "-0.01em", Fmax: 48, Fmin: 30 })};
    text-align: ${props => props.text || 'center'};
    letter-spacing: ${props => props.letSps || "-0.01em"};
    font-family: ${props => props.family || `Poppins`};
`