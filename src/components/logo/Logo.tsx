import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icon/Icon';

interface LogoProps {
    color?: string;
    idLogo?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'currentColor', idLogo = 'logo' }) => {
    return (
        <StyledLogoLink href='/'>
            <Icon
                iconId={idLogo}
                width="97"
                height="59"
                viewBox="0 0 97 59"
                fill={color}
            />
        </StyledLogoLink>
    );
};

const StyledLogoLink = styled.a`
    display: inline-block;
    text-decoration: none;
`;