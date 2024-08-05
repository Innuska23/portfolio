import styled from "styled-components";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme.styled";

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
    cursor: pointer;

    &:hover {
        color: ${theme.colors.primaryText};
        text-decoration-line: overline;
    }
`;

export const S = {
    MenuList,
    MenuListItem,
    MenuLink
}