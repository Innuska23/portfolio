import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

interface LogoProps {
    color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = 'currentColor' }) => {
    return (
        <StyledLogoLink href='/'>
            <Icon
                iconId={'logo'}
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