import styled from "styled-components"

import { SocialIcon } from "../socialIcon/SocialIcon"
import { theme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common";

interface MenuItem {
    items: string;
    href: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
    return (
        <StyledMenu>
            <MenuList>
                {menuItems.map((item, index) => (
                    <MenuListItem key={index}>
                        <MenuLink href={item.href}>{item.items}</MenuLink>
                    </MenuListItem>
                ))}
            </MenuList>
            <SocialIconContainer>
                <SocialIcon />
            </SocialIconContainer>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ${font({
    weight: 500,
    lineHeight: "130%",
    family: `${theme.font.secondFamily}`,
})}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 790px;
    width: 100%;
    padding-bottom: 25px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    max-width: 609px;
    width: 100%;
    margin-right: 51px;

    @media (max-width: 900px) {
        justify-content: flex-start;
        gap: 25px;
    }
`

const MenuListItem = styled.li``

const MenuLink = styled.a`
    ${font({
    weight: 500,
    lineHeight: "130%",
    color: `${theme.colors.secondaryText}`,
    Fmax: 20,
    Fmin: 16,
})}
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primaryText};
        text-decoration-line: overline;
    }
`;

const SocialIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 5px;

    @media (max-width: 850px) {
        gap: 10px;
    }
`