import React from 'react';

import { Icon } from '../icon/Icon';
import { S } from "./Logo_Styles"

interface LogoProps {
    color?: string;
    idLogo?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'currentColor', idLogo = 'logo' }) => {
    return (
        <S.LogoLink href='/'>
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

