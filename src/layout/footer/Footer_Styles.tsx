import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";
import { font } from "../../styles/Common";

const Footer = styled.footer`
    margin-top: 200px;

    @media ${theme.media.mobile} {
        margin-top: 100px;
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

    @media ${theme.media.tablet}{
        gap: 15px;
        flex-direction: column; 
        align-items: center;
    }
`;

const SocialContactsItem = styled.li``;

const SocialLink = styled.a`
    ${font({
    family: `${theme.font.secondFamily}`,
    Fmin: 12,
    Fmax: 18,
    weight: 400,
    lineHeight: "144%",
    color: `${theme.colors.primaryText}`
})}
    `;


const SocialIconContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-right: 15px;

    @media ${theme.media.tablet}{
        align-items: center;
    }
`

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

    @media ${theme.media.tablet} {
        display: none;
    }
    @media (max-width: 1234px) {
        gap: 20px;
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
    @media ${theme.media.tablet} {
        text-align: center;  
        width: 100%;
    }
`;

const CopyrightSpan = styled.span`
    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const NavigationFooterItem = styled.li`
    
`

const NavigationFooterLink = styled.a`
    ${font({
    color: `${theme.colors.primaryText}`
})}
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
    CopyrightSpan,
    NavigationFooterItem,
    NavigationFooterLink
}