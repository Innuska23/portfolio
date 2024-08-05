import { SectionTitle } from "../SectionTitle"
import { PersonalInfo } from "../personalInfo/PersonalInfo";

import { S } from "./WorkExperience_Styles"

const personalDate = [
    {
        placeName: "Dr. Rajkumar's Learning App",
        badge: "Full Time",
        title: "Junior Web Developer",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021"
    },
    {
        placeName: "Dr. Rajkumar's Learning App",
        badge: "Full Time",
        title: "Junior Web Developer",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021"
    },
    {
        placeName: "Dr. Rajkumar's Learning App",
        badge: "Full Time",
        title: "Junior Web Developer",
        location: "Bengaluru",
        date: "Sep 2021 - Dec 2021"
    }
]

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

            <PersonalInfo
                placeName="Bangalore Instutute of Technology"
                badge="Full Time"
                title="Bachelor in Electronics & Communication"
                date="Aug 2016 - Dec 2020" />
        </>
    )
}
