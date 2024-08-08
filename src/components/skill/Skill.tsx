import { Fade } from "react-awesome-reveal";
import { Icon } from "../icon/Icon"

import { skillData } from "../data/data";

import { S } from "./Skill_Styles"

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
