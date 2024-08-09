import styled from "styled-components";

import { theme } from "../../styles/Theme.styled";
import { font } from "../../styles/Common";

import { Link } from "react-scroll";

const Footer = styled.footer`
    position: relative;
    z-index: 100;
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0;

    @media ${theme.media.tablet} {
        padding: 50px 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    padding-top: 23px;

    @media ${theme.media.tablet} {
        padding-top: 0px;
    }
    
    &::after {
        content: "";
        width: 100%; 
        height: 2px;
        opacity: 0.3;
        background-color: ${theme.colors.secondaryText};
        position: absolute;
        top: 120px;
        right: 0px;
        z-index: 2;
    }
`;

const SocialContactsItemList = styled.ul`
    display: flex;
    gap: 90px;
    align-items: center;

    @media ${theme.media.tablet} {
        gap: 15px;
        flex-direction: column; 
        align-items: center;
    }
`;

const SocialContactsItem = styled.li`
    :hover {
        transition: ${theme.animations.transition};
        transform: scale(1.1);
    }
`;

const SocialLink = styled.a`
    ${font({
    family: `${theme.font.secondFamily}`,
    Fmin: 12,
    Fmax: 18,
    weight: 400,
    lineHeight: "144%",
    color: `${theme.colors.primaryText}`
})}
    transition: ${theme.animations.transition};

    :hover {
        color: ${theme.colors.secondaryText};
        text-decoration: underline;
        transition: ${theme.animations.transition};
    }
`;

const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 15px;

    @media ${theme.media.tablet} {
        align-items: center;
    }
`;

const NavigationList = styled.ul`
    ${font({
    family: `${theme.font.secondFamily}`,
    Fmin: 12,
    Fmax: 18,
    lineHeight: "144%",
})}
    display: flex;
    flex-wrap: wrap;
    gap: 52px;
    margin-top: 90px;

    @media ${theme.media.tablet} {
        display: none;
    }
    @media (max-width: 1234px) {
        gap: 20px;
    }
    @media (max-width: 900px) {
        gap: 10px;
    }

    a {
        ${font({ color: `${theme.colors.primaryText}` })}
    }
`;

const Copyright = styled.small`
    ${font({
    Fmin: 12,
    Fmax: 18,
    letterSpacing: "0em",
})}
    margin-top: 90px;
    display: flex;
    @media ${theme.media.tablet} {
        text-align: center;
        justify-content: center;  
        width: 100%;
        margin-top: 50px;
    }
`;

const CopyrightHeart = styled.span`
    display: inline-block;
    animation: pulse 1.5s infinite;
    margin: 0 5px;

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const CopyrightSpan = styled.span`
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 5px;
`;

const NavigationFooterItem = styled.li`
    :hover {
        transition: ${theme.animations.transition};
        transform: scale(1.1);
    }`;

const NavigationFooterLink = styled(Link)`
    cursor: pointer;
    ${font({
    color: `${theme.colors.primaryText}`
})}
    transition: ${theme.animations.transition};
    
    :hover {
        ${font({
    color: `${theme.colors.secondaryText}`
})}
        text-decoration: underline;
        transition: ${theme.animations.transition};
        transform: scale(1.1)
    }
`;

const LinkContainer = styled.div`
    display: flex;
    gap: 50px;
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        gap: 15px;
        justify-content: center;
        align-items: center;
    }
`

export const S = {
    Footer,
    Wrapper,
    SocialContactsItemList,
    SocialContactsItem,
    SocialLink,
    SocialIconContainer,
    NavigationList,
    Copyright,
    CopyrightHeart,
    CopyrightSpan,
    NavigationFooterItem,
    NavigationFooterLink,
    LinkContainer
};
