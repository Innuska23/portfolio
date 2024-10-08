import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme.styled"

const MobileMenu = styled.nav`

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -150px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.primaryText};
        position: absolute;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
        `}

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.primaryText};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
            `}
        }
        
        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.primaryText};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
            width: 36px;
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #9f9b9be8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: all 0.5s ease-out;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    & ul {
        gap: 40px;
    }
    `
    }
`

export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuPopup
} 