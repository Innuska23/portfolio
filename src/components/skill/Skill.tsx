import { Fade } from "react-awesome-reveal";
import { Icon } from "../icon/Icon"

import { S } from "./Skill_Styles"

const skillData = [
    {
        iconId: "htmlSvg",
        height: "120",
        width: "120",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "cssSvg",
        height: "119",
        width: "120",
        viewBox: "0 0 120 119"
    },
    {
        iconId: "jsSvg",
        height: "120",
        width: "120",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "reactSvg",
        height: "101",
        width: "113",
        viewBox: "0 0 113 101"
    },
    {
        iconId: "reduxSvg",
        height: "100",
        width: "105",
        viewBox: "0 0 105 100"
    },
    {
        iconId: "bootstrapSvg",
        height: "87",
        width: "88",
        viewBox: "0 0 88 87"
    },
    {
        iconId: "tailwindSvg",
        height: "131",
        width: "131",
        viewBox: "0 0 131 131"
    },
    {
        iconId: "sassSvg",
        height: "87",
        width: "117",
        viewBox: "0 0 117 87"
    },
    {
        iconId: "gitSvg",
        height: "105",
        width: "105",
        viewBox: "0 0 105 105"
    },
    {
        iconId: "greensockSvg",
        height: "120",
        width: "120",
        viewBox: "0 0 120 120"
    },
    {
        iconId: "vscodeSvg",
        height: "112",
        width: "112",
        viewBox: "0 0 112 112"
    },
    {
        iconId: "github",
        height: "88",
        width: "88",
        viewBox: "0 0 88 88"
    }
];



export const Skill: React.FC = () => {
    return (
        <S.Skill>
            <Fade cascade={true}
                damping={0.2}>
                {skillData.map((skill, index) => (
                    <Icon
                        key={index}
                        iconId={skill.iconId}
                        height={skill.height}
                        width={skill.width}
                        viewBox={skill.viewBox}
                    />
                ))}
            </Fade>

        </S.Skill>
    )
}
