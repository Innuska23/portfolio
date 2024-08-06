import { Icon } from "../icon/Icon"

import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from "react";

import { S } from "./GoTopBtn_Styles";

export const GoToTop = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            }
            else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn &&
                <S.StyledGoToTop onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"goToTop"} height={"24px"} width={"24px"} viewBox="0 0 24 24" />
                </S.StyledGoToTop>
            }
        </>
    )
}

