import React, { useState } from "react";
import { Menu } from "../menu/Menu";

import { S } from "./MobileMenu_Styles";

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton
                aria-label="Кнопка меню"
                isOpen={menuIsOpen}
                onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setMenuIsOpen(false) }}>
                <Menu />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    )
}
