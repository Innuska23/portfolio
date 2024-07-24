import { SectionTitle } from "../SectionTitle"
import { PersonalInfo } from "../personalInfo/PersonalInfo";

export const UserExperience = () => {
    return (
        <>
            <SectionTitle text="start">Work Experience</SectionTitle>

            <PersonalInfo
                placeName="Dr. Rajkumar's Learning App"
                badge="Full Time"
                title="Junior Web Developer"
                location="Bengaluru"
                date="Sep 2021 - Dec 2021" />

            <SectionTitle text="start">Education</SectionTitle>

            <PersonalInfo
                placeName="Bangalore Instutute of Technology"
                badge="Full Time"
                title="Bachelor in Electronics & Communication"
                date="Aug 2016 - Dec 2020" />
        </>
    )
}