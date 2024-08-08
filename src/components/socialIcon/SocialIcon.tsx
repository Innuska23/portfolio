import { Icon } from "../icon/Icon";

import { socialIconsData } from "../data/data";

import { S } from "./Socialcon_Styles"

interface SocialIconProps {
    color?: string;
    hoverColor?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ color, hoverColor }) => {
    return (
        <>
            {socialIconsData.map((iconData, index) => (
                <S.SocialListItem key={index}>
                    <S.SocialLink
                        href={iconData.href}
                        color={color}
                        hoverColor={hoverColor}
                        target="_blank"
                        aria-label={iconData.ariaLabel}
                    >
                        <Icon
                            iconId={iconData.iconId}
                            width={iconData.width}
                            height={iconData.height}
                            viewBox={iconData.viewBox}
                        />
                    </S.SocialLink>
                </S.SocialListItem>
            ))}
        </>
    );
};