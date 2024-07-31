import styled from "styled-components";

import { theme } from "../styles/Theme.styled";
import { font } from "../styles/Common";

type SectionTitlePropsType = {
    font?: string
    text?: string
    color?: string
    lineH?: string
    letSps?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`

${font({ weight: 700, letterSpacing: "-0.01em", lineHeight: "124%", Fmax: 48, Fmin: 30 })};
    /* font-weight: 700; */
    /* font-size: ${props => props.font || '42px'}; */
    text-align: ${props => props.text || 'center'};
    /* color:${props => props.color || `${theme.colors.primaryText}`}; */
    /* letter-spacing: ${props => props.letSps || "-0.01em"}; */
    /* line-height: ${props => props.lineH || '124%'}; */
`