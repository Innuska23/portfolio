import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";

const SocialListItem = styled.li`
`;

interface SocialLinkProps {
    color?: string;
    hoverColor?: string;
}

const SocialLink = styled.a<SocialLinkProps>`
    color: ${(props) => props.color || theme.colors.secondaryText};
    transform: translateY(0px);

        &:hover {
            color: ${(props) => props.hoverColor || theme.colors.primaryText};        
}
`;

export const S = {
    SocialListItem,
    SocialLink
}