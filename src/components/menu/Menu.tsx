import styled from "styled-components"
import { SocialIcon } from "../socialIcon/SocialIcon"
import { theme } from "../../styles/Theme.styled"


export const Menu = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.menuItems.map((item, index) => {
                    return <MenuListItem key={index}>
                        <MenuLink href="#">{item}</MenuLink>
                    </MenuListItem>
                })}
            </MenuList>
            <SocialIconContainer>
                <SocialIcon />
            </SocialIconContainer>

        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 25px;
    font-family: ${theme.font.secondFamily};
    font-weight: 500;
    line-height: 130%;    
`
const MenuList = styled.ul`
    display: flex;
    gap: 50px;
`

const MenuListItem = styled.li`
    
`
const MenuLink = styled.a`
    font-size: 20px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    color: ${theme.colors.secondaryText};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.primaryText};
    }
`;

const SocialIconContainer = styled.div`
    display: flex;
    padding-top: 2px;
    gap: 20px;
    margin-left: 51px;
`