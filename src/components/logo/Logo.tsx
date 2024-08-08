import React from 'react';

import { S } from "./Logo_Styles"
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <S.LogoContainer onClick={() => { scroll.scrollToTop() }}>
            <S.LogoSpan>&#123;DEV&#125;</S.LogoSpan>
            <S.LogoSpan>INNA</S.LogoSpan>
        </S.LogoContainer>
    );
};

