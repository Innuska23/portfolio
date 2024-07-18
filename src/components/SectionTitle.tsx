import styled from "styled-components";

type SectionTitlePropsType = {
    font?: string
}
export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-weight: 700;
    font-size: ${props => props.font || '48px'};
    line-height: 54%;
    text-align: center;
    color: #42446e;
`