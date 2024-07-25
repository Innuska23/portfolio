import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type SectionTitlePropsType = {
    font?: string
    text?: string
    color?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-weight: 700;
    font-size: ${props => props.font || '48px'};
    text-align: ${props => props.text || 'center'};
    color:${props => props.color || `${theme.colors.primaryText}`};
    letter-spacing: -0.01em;
`