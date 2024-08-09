import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme.styled"

const Contact = styled.section`
${font({
    family: `${theme.font.secondFamily}`,
    lineHeight: "121%",
    letterSpacing: "-0.02em"
})}
    font-family: "DM SANS", sans-serif;
    @media ${theme.media.mobile} {
        margin-top: 100px;
    }
`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    margin-top: 110px;

    @media ${theme.media.tablet}{
        margin-top: 50px;
    }
`;

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.primaryText};
    padding: 7px 15px;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;

    ${font({
    color: `${theme.colors.primaryText}`,
    Fmax: 12,
    Fmin: 12,
    letterSpacing: "0.05em",
})}

    &::placeholder{
        color: ${theme.colors.placeholderColor};
    }

    &:focus-visible{
        outline: 1px solid ${theme.colors.primaryText};
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 100%;
`

const Label = styled.label`
    margin-bottom: 10px;
`

const Textarea = styled.textarea`
    resize: none;
    height: 155px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.primaryText};
    padding: 7px 15px;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;

    ${font({
    color: `${theme.colors.primaryText}`,
    Fmax: 12,
    Fmin: 12,
    letterSpacing: "0.05em",
})}

    &::placeholder{
        color: ${theme.colors.placeholderColor};;
    }

    &:focus-visible{
        outline: 1px solid ${theme.colors.primaryText};
    }
`
const Button = styled.button`
    background-color: ${theme.colors.grayBg};
    border: 1px solid ${theme.colors.primaryText};
    border-radius: 8px;
    min-width: 180px;
    padding: 16px 8px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    transition: ${theme.animations.transition};

    ${font({
    color: `${theme.colors.primaryText}`,
    weight: 500,
})}

    :hover{
        color: ${theme.colors.primaryBg};
        background-color: ${theme.colors.primaryText};
    }
`

const ErrorText = styled.div`
    color: ${theme.colors.error};
    font-size: 12px;
    margin-top: 5px;
`;

export const S = {
    Contact,
    Form,
    Field,
    FormGroup,
    Label,
    Textarea,
    Button,
    ErrorText
}