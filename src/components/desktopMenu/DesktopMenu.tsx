import { SocialIcon } from "../socialIcon/SocialIcon"
import { Menu } from "../../layout/header/menu/Menu";

import { S } from "./DesktopMenu_Styles";

interface MenuItem {
    items: string;
    href: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

export const DesktopMenu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems} />
            <S.SocialIconContainer>
                <SocialIcon />
            </S.SocialIconContainer>
        </S.DesktopMenu>
    )
}

