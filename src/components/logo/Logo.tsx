import React from 'react';

import { Icon } from '../icon/Icon';
import { S } from "./Logo_Styles"
import { animateScroll as scroll } from 'react-scroll';

interface LogoProps {
    color?: string;
    idLogo?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'currentColor', idLogo = 'logo' }) => {
    return (
        <S.LogoLink onClick={() => { scroll.scrollToTop() }}>
            <Icon
                iconId={idLogo}
                width="97"
                height="59"
                viewBox="0 0 97 59"
                fill={color}
            />
        </S.LogoLink>
    );
};

