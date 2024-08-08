import React from "react";

import { menuItems } from "../data/data";

import { S } from "./Menu_Styles";

export const Menu: React.FC = () => {
    return (
        <S.MenuList role="navigation">
            {menuItems.map((item, index) => (
                <S.MenuListItem key={index}>
                    <S.MenuLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-50}
                        aria-label={item.items}
                    >
                        {item.items}
                    </S.MenuLink>
                </S.MenuListItem>
            ))}
        </S.MenuList>
    );
};