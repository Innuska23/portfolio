import { theme } from "./Theme.styled";

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: string;
    Fmin?: number;
    Fmax?: number;
    letterSpacing?: string;
};

export const font = ({ family, weight, color, lineHeight, Fmin, Fmax, letterSpacing }: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryText};
    line-height: ${lineHeight || "120%"};
    font-size: calc( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
    letter-spacing: ${letterSpacing || "-0.02em"};
`
