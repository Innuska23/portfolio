import React from "react";
import { S } from "./Menu_Styles";

const menuItems = [
    { items: "Home", href: "home" },
    { items: "About", href: "about" },
    { items: "Tech Stack", href: "tech-stack" },
    { items: "Projects", href: "projects" },
    { items: "Contact", href: "contact" }
];

export const Menu: React.FC = () => {

    return (
        <S.MenuList>
            {menuItems.map((item, index) => (
                <S.MenuListItem key={index}>
                    <S.MenuLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-150}
                    >
                        {item.items}
                    </S.MenuLink>
                </S.MenuListItem>
            ))}
        </S.MenuList>
    );
};