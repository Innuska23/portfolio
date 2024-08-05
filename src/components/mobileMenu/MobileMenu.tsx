import React from "react";
import { Menu } from "../../layout/header/menu/Menu";

import { S } from "./MobileMenu_Styles";

interface MenuItem {
    items: string;
    href: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}


export const MobileMenu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={menuItems} />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    )
}
