import styled from "styled-components";

import { theme } from "../styles/Theme.styled";

type SectionParagraphPropsType = {
    marginTop?: string
}

export const SectionParagraph = styled.p<SectionParagraphPropsType>`
    font-weight: 400;
    font-size: 32px;
    line-height: 81%;
    text-align: center;
    color: ${theme.colors.secondaryText};
    margin-top: ${props => props.marginTop || '0px'};
`