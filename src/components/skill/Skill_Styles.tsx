import styled from "styled-components";
import { theme } from "../../styles/Theme.styled";


const Skill = styled.div`
    display: grid;
    gap: 81px 103px;
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center; 
    margin: 0 auto;
    margin-top: 100px;

    @media (max-width: 1234px) {
        gap: 105px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${theme.media.tablet} {
        gap: 75px;
        margin-top: 50px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${theme.media.mobile} {
        gap: 20px;
        grid-template-columns: repeat(2, 1fr);
    }
`
    ;

export const S = { Skill }