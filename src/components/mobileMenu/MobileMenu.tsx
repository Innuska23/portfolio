import styled, { css } from "styled-components"

import { theme } from "../../styles/Theme.styled"

interface MenuItem {
    items: string;
    href: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}


export const MobileMenu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <MenuList>
                    {menuItems.map((item, index) => (
                        <MenuListItem key={index}>
                            <MenuLink href={item.href}>{item.items}</MenuLink>
                        </MenuListItem>
                    ))}
                </MenuList>
            </MobileMenuPopup>

        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
        display: none;

    @media ${theme.media.tablet}  {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -80px;
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
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    flex-direction: column;
    align-items: center;
`

const MenuListItem = styled.li`
    
`
const MenuLink = styled.a`
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    color: ${theme.colors.primaryBg};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primaryText};
        text-decoration-line: overline;
    }
`;