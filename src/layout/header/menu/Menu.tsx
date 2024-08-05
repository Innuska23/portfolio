import React from "react"
import { S } from "./Menu_Styles"

interface MenuItem {
    items: string;
    href: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <S.MenuList>
            {menuItems.map((item, index) => (
                <S.MenuListItem key={index}>
                    <S.MenuLink href={item.href}>{item.items}</S.MenuLink>
                </S.MenuListItem>
            ))}
        </S.MenuList>
    )
}
