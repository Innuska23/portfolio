import styled from "styled-components";
import { SectionTitle } from "../SectionTitle"
import { Icon } from "../icon/Icon";

export const WorkExperience = () => {
    return (
        <>
            <SectionTitle text="start">Work Experience</SectionTitle>
            <ExperienceItem>

                <div>
                    <JobTitle>Junior Web Developer</JobTitle>
                    <Badge>Full Time</Badge>
                </div>

                <JobDetails>
                    <Icon iconId={"build"} height={"12px"} width={"12px"} viewBox={"0 0 12px 12px"} />
                    <CompanyName>Dr. Rajkumar's Learning App</CompanyName>
                    <Icon iconId={"location"} height={"12px"} width={"12px"} viewBox={"0 0 12px 12px"} />
                    <span>Bengaluru</span>
                    <Icon iconId={"date"} height={"12px"} width={"16px"} viewBox={"0 0 12px 16px"} />
                    <span>Sep 2021 - Dec 2021</span>

                </JobDetails>
            </ExperienceItem>

            <SectionTitle text="start">Education</SectionTitle>
            <ExperienceItem>
                <div>
                    <JobTitle>Bachelor in Electronics & Communication</JobTitle>
                    <Badge>Full Time</Badge>
                </div>
                <JobDetails>
                    <Icon iconId={"build"} height={"12px"} width={"12px"} viewBox={"0 0 12px 12px"} />
                    <CompanyName>Bangalore Institute of Technology</CompanyName>
                    <Icon iconId={"date"} height={"12px"} width={"12px"} viewBox={"0 0 12px 12px"} />
                    <span>Aug 2016 - Dec 2020</span>
                </JobDetails>
            </ExperienceItem>
        </>
    )
}

const ExperienceItem = styled.div`
    div {
    display: flex;
}

`;

const JobTitle = styled.h3`
`;

const CompanyName = styled.span`
    font-weight: bold;
`;

const JobDetails = styled.div`
    display: flex;
`;

const Badge = styled.span`
`;