import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme.styled";
import { Link } from "react-scroll";

const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    max-width: 609px;
    width: 100%;
    margin-right: 51px;

    @media (max-width: 1200px) {
        margin-left: 15px;
    }

    @media (max-width: 900px) {
        justify-content: flex-start;
        gap: 25px;
        margin-right: 0px;
    }

    @media ${theme.media.tablet} {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 25px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
`

const MenuListItem = styled.li``

const MenuLink = styled(Link)`
    ${font({
    weight: 500,
    lineHeight: "130%",
    color: `${theme.colors.secondaryText}`,
    Fmax: 20,
    Fmin: 12,
})}
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    padding: 5px 10px;


    @media ${theme.media.tablet} {
        ${font({
    color: `${theme.colors.darkColor}`
})}
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${theme.colors.primaryText};
        transition: width 0.3s ease;
    }

    &:hover, &.active {
        color: ${theme.colors.primaryText};
        transform: translateY(-2px);
        text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    &:hover::after, &.active::after {
        width: 100%;
    }

    &.active {
        font-weight: 700;
    }
`;
export const S = {
    MenuList,
    MenuListItem,
    MenuLink
}