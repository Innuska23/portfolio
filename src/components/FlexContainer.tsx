import styled from "styled-components";
import { theme } from "../styles/Theme.styled";

type FlexContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?: string
    marginTop?: string
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || '0'};
    padding: ${props => props.padding || '0'};
    /* margin-top: ${props => props.marginTop || '0px'}; */
    height: 100%;
    @media ${theme.media.tablet} {
        gap: 30px;
    }
`