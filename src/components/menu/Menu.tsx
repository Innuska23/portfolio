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
    padding-top: 8px;
    padding-bottom: 25px;


    @media ${theme.media.tablet}  {
        display: none;
    }

`
const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    @media (max-width: 850px) {
        gap: 25px;
    }
`

const MenuListItem = styled.li`
    
`
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
    padding-top: 2px;
    gap: 20px;
    margin-left: 51px;
    @media (max-width: 850px) {
        gap: 10px;
    }
`