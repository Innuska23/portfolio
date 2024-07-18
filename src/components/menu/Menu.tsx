import styled from "styled-components"
import { SocialIcon } from "../socialIcon/SocialIcon"


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
            <div>
                <SocialIcon />
            </div>

        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

        ul {
            display: flex;
            gap: 30px;
        }
        div {
            display: flex;
        }
`
