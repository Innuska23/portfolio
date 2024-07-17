import styled from "styled-components"
import { Icon } from "../icon/Icon"

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
                <li>
                    <a href="">
                        <Icon iconId={'githubSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'twitterSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'linkedinSvg'} width={"30"} height={"30"} viewBox={"0 0 30 30"} />
                    </a>
                </li>
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
