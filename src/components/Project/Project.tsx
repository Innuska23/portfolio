import { Icon } from "../icon/Icon"

import { S } from "./Project_Styles"


type ProjectTypeProps = {
    title: string
    text: string
    src: string
    stack: string
}

export const Project: React.FC<ProjectTypeProps> = (props: ProjectTypeProps) => {
    return (
        <S.Project>
            <S.Image alt="" src={props.src} />
            <S.BoxText>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Stack>
                    <S.StackBold>Tech stack: </S.StackBold>
                    {props.stack}</S.Stack>
                <S.ButtonContainer>
                    <S.Link href={"#"}>
                        <Icon iconId="linkChain" height="20" width="20" viewBox="0 0 20 20" />
                        <S.IconSpan>Live Preview</S.IconSpan>
                    </S.Link>
                    <S.Link href={"#"}>
                        <Icon iconId="githubFill" height="20" width="20" viewBox="0 0 20 20" />
                        <S.IconSpan>View Code</S.IconSpan>
                    </S.Link>
                </S.ButtonContainer>
            </S.BoxText>

        </S.Project>
    )
}
