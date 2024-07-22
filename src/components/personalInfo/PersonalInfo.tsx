import React from 'react';
import styled from "styled-components";
import { Icon } from "../icon/Icon";

type PersonalInfoPropsType = {
  title: string,
  badge: string,
  placeName: string,
  location?: string,
  date: string,
}

export const PersonalInfo: React.FC<PersonalInfoPropsType> = ({ title, badge, placeName, location, date }) => (
  <PersonalItem>
    <PersonalBoxContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoBadge>{badge}</InfoBadge>
    </PersonalBoxContainer>

    <PersonalDetails>
      <Icon iconId="build" height="12px" width="12px" viewBox="0 0 12 12" />
      <PlaceName>{placeName}</PlaceName>

      {location && (
        <>
          <Icon iconId="location" height="12px" width="12px" viewBox="0 0 12 12" />
          <span>{location}</span>
        </>
      )}

      <Icon iconId="date" height="12px" width="16px" viewBox="0 0 12 16" />
      <span>{date}</span>
    </PersonalDetails>
  </PersonalItem>
);

const PersonalBoxContainer = styled.div`
  align-items: baseline;
  justify-content: space-between;
`;

const InfoTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #666;
`;

const InfoBadge = styled.span`
  font-weight: 600;
  font-size: 9px;
  line-height: 289%;
  text-align: center;
  color: #018c0f;
  border-radius: 100px;
  width: 84px;
  height: 24px;
  background: #d7ffe0;
`;

const PersonalDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 233%;
    letter-spacing: 0.08em;
    color: #a7a7a7;
`;


const PersonalItem = styled.div`
    div {
    display: flex;
}
`;

const PlaceName = styled.span`
    font-weight: bold;
`;
