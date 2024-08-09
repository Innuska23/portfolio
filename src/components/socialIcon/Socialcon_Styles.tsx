import styled from "styled-components";

import { theme } from "../../styles/Theme.styled";

const SocialListItem = styled.li`
    &:hover{
    transform: scale(1.1);
    transition: ${theme.animations.transition};
}
`;

interface SocialLinkProps {
    color?: string;
    hoverColor?: string;
}

const SocialLink = styled.a<SocialLinkProps>`
    color: ${(props) => props.color || theme.colors.secondaryText};
    transform: translateY(0px);
    transition: ${theme.animations.transition};

        &:hover {
            color: ${(props) => props.hoverColor || theme.colors.primaryText};        
}
`;

export const S = {
    SocialListItem,
    SocialLink
}