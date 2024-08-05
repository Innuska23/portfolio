import { Icon } from "../icon/Icon";

import { S } from "./Socialcon_Styles"

interface SocialIconProps {
    color?: string;
    hoverColor?: string;
}

const socialIconsData = [
    {
        iconId: 'githubSvg',
        width: '30',
        height: '30',
        viewBox: '0 0 30 30',
        href: ''
    },
    {
        iconId: 'twitterSvg',
        width: '30',
        height: '31',
        viewBox: '0 0 30 31',
        href: ''
    },
    {
        iconId: 'linkedinSvg',
        width: '30',
        height: '30',
        viewBox: '0 0 30 30',
        href: ''
    }
];


export const SocialIcon: React.FC<SocialIconProps> = ({ color, hoverColor }) => {
    return (
        <>
            {socialIconsData.map((iconData, index) => (
                <S.SocialListItem key={index}>
                    <S.SocialLink
                        href={iconData.href}
                        color={color}
                        hoverColor={hoverColor}>
                        <Icon
                            iconId={iconData.iconId}
                            width={iconData.width}
                            height={iconData.height}
                            viewBox={iconData.viewBox} />
                    </S.SocialLink>
                </S.SocialListItem>
            ))}
        </>
    )
}

