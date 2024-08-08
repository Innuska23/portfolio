import { SocialIcon } from "../socialIcon/SocialIcon";
import { Menu } from "../menu/Menu";

import { S } from "./DesktopMenu_Styles";

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu aria-label="Main Menu" />
            <S.SocialIconContainer>
                <SocialIcon aria-label="Social Media Links" />
            </S.SocialIconContainer>
        </S.DesktopMenu>
    );
};


