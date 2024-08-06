import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme.styled"

import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from "react";

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
                <StyledGoToTop onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"goToTop"} height={"24px"} width={"24px"} viewBox="0 0 24 24" />
                </StyledGoToTop>
            }
        </>
    )
}

const StyledGoToTop = styled.button`
    background-color: ${theme.colors.primaryText};
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    z-index: 9999999;
`