import { Icon } from "../icon/Icon";

import { S } from "./Project_Styles";

type ProjectTypeProps = {
    title: string;
    text: string;
    src: string;
    stack: string;
    linkPreview: string;
    linkCode: string;
    alt: string;
};

export const Project: React.FC<ProjectTypeProps> = (props: ProjectTypeProps) => {
    return (
        <S.Project>
            <S.ImageLink href={props.linkPreview} target="_blank">
                <S.Image alt={props.alt} src={props.src} />
            </S.ImageLink>

            <S.BoxText>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Stack>
                    <S.StackBold>Tech stack: </S.StackBold>
                    {props.stack}
                </S.Stack>

                <S.ButtonContainer>
                    <S.Link target="_blank" href={props.linkPreview}>
                        <Icon iconId="linkChain" height="20" width="20" viewBox="0 0 20 20" />
                        <S.IconSpan>Live Preview</S.IconSpan>
                    </S.Link>
                    <S.Link target="_blank" href={props.linkCode}>
                        <Icon iconId="githubFill" height="20" width="20" viewBox="0 0 20 20" />
                        <S.IconSpan>View Code</S.IconSpan>
                    </S.Link>
                </S.ButtonContainer>

            </S.BoxText>
        </S.Project>
    );
};