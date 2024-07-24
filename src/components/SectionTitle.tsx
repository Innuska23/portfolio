import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type SectionTitlePropsType = {
    font?: string
    text?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-weight: 700;
    font-size: ${props => props.font || '48px'};
    line-height: 54%;
    text-align: ${props => props.text || 'center'};
    color: ${theme.colors.primaryText};
`