import styled from "styled-components"
import { SocialIcon } from "../socialIcon/SocialIcon"
import { theme } from "../../styles/Theme.styled"


export const Menu = (props: {
    menuItems: Array<string>
}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                })}
            </ul>
            <SocialIconContainer>
                <SocialIcon />
            </SocialIconContainer>

        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${theme.font.secondFamily};
    font-weight: 500;
    line-height: 130%;

        ul {
            display: flex;
            gap: 50px;
        }
        div {
            display: flex;
        }

        a {
            font-size: 20px;
            line-height: 130%;
            text-align: center;
            color: ${theme.colors.secondaryText}
        }
`
const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 51px;
`