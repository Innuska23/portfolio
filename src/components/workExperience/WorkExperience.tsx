import { SectionTitle } from "../SectionTitle"
import { educationDate, personalDate } from "../data/data";
import { PersonalInfo } from "../personalInfo/PersonalInfo";

import { S } from "./WorkExperience_Styles"

export const UserExperience: React.FC = () => {
    return (
        <>
            <SectionTitle text="start">Work Experience</SectionTitle>
            <S.PersonalInfoWrapper>
                {personalDate.map((date, index) => (
                    <PersonalInfo
                        key={index}
                        placeName={date.placeName}
                        badge={date.badge}
                        title={date.title}
                        location={date.location}
                        date={date.date} />

                ))}
            </S.PersonalInfoWrapper>

            <SectionTitle text="start">Education</SectionTitle>
            {educationDate.map((education, index) => (
                <PersonalInfo
                    key={index}
                    placeName={education.placeName}
                    badge={education.badge}
                    title={education.title}
                    date={education.date} />
            ))}

        </>
    )
}
