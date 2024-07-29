
import styled from "styled-components";

import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme.styled";

interface SocialIconProps {
    color?: string;
    hoverColor?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ color, hoverColor }) => {
    return (
        <>
            <SocialListItem>
                <SocialLink
                    href=""
                    color={color}
                    hoverColor={hoverColor}>
                    <Icon iconId={'githubSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
                <SocialLink
                    href=""
                    color={color}
                    hoverColor={hoverColor}>
                    <Icon iconId={'twitterSvg'} width={"30"} height={"31"} viewBox={"0 0 30 31"} />
                </SocialLink>
            </SocialListItem>
            <SocialListItem>
                <SocialLink
                    href=""
                    color={color}
                    hoverColor={hoverColor}>
                    <Icon iconId={'linkedinSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                </SocialLink>
            </SocialListItem>
        </>
    )
}

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
