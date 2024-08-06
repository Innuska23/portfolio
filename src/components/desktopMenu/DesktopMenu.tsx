import { SocialIcon } from "../socialIcon/SocialIcon"
import { Menu } from "../menu/Menu";

import { S } from "./DesktopMenu_Styles";

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu />
            <S.SocialIconContainer>
                <SocialIcon />
            </S.SocialIconContainer>
        </S.DesktopMenu>
    )
}

