import styled from "styled-components"

import { Icon } from "../icon/Icon"

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={"htmlSvg"} height={"120"} width={"120"} viewBox={"0 0 120 120"} />
            <Icon iconId={"cssSvg"} height={"119"} width={"120"} viewBox={"0 0 120 119"} />
            <Icon iconId={"jsSvg"} height={"120"} width={"120"} viewBox={"0 0 120 120"} />
            <Icon iconId={"reactSvg"} height={"101"} width={"113"} viewBox={"0 0 113 101"} />
            <Icon iconId={"reduxSvg"} height={"100"} width={"105"} viewBox={"0 0 105 100"} />
            <Icon iconId={"bootstrapSvg"} height={"87"} width={"88"} viewBox={"0 0 88 87"} />
            <Icon iconId={"tailwindSvg"} height={"131"} width={"131"} viewBox={"0 0 131 131"} />
            <Icon iconId={"sassSvg"} height={"87"} width={"117"} viewBox={"0 0 117 87"} />
            <Icon iconId={"gitSvg"} height={"105"} width={"105"} viewBox={"0 0 105 105"} />
            <Icon iconId={"greensockSvg"} height={"120"} width={"120"} viewBox={"0 0 120 120"} />
            <Icon iconId={"vscodeSvg"} height={"112"} width={"112"} viewBox={"0 0 112 112"} />
            <Icon iconId={"github"} height={"88"} width={"88"} viewBox={"0 0 88 88"} />
        </StyledSkill>
    )
}

export const StyledSkill = styled.div`
    display: flex;
    gap: 105px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`