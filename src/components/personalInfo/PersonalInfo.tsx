import React from 'react';
import styled from "styled-components";

import { Icon } from "../icon/Icon";
import { theme } from '../../styles/Theme.styled';
import { font } from '../../styles/Common';


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
      <PersonalSmallBox>
        <Icon iconId="build" height="12px" width="12px" viewBox="0 0 12 12" />
        <PlaceName>{placeName}</PlaceName>

        {location && (
          <LocationWrapper>
            <Icon iconId="location" height="12px" width="12px" viewBox="0 0 12 12" />
            <span>{location}</span>
          </LocationWrapper>
        )}
      </PersonalSmallBox>
      <PersonalSmallBox>
        <Icon iconId="date" height="12px" width="16px" viewBox="0 0 12 16" />
        <span>{date}</span>
      </PersonalSmallBox>
    </PersonalDetails>
  </PersonalItem>
);


const PersonalItem = styled.div`
  max-width: 710px;
  padding: 0 8px;
  position: relative;
  z-index: 0;
    div {
    display: flex;
}

&::after {
    content: "";
    display: inline-block;
    max-width: 696px;
    height: 2px;
    z-index: -1;
    border: 1px solid #ebeaed;
  }
  
`;

const PersonalBoxContainer = styled.div`
  align-items: baseline;
  justify-content: space-between;
`;

const InfoTitle = styled.h3`
  ${font({
  weight: 400,
  Fmax: 20,
  Fmin: 14,
  lineHeight: "140%",
  letterSpacing: "0.05em",
  color: `${theme.colors.secondaryText}`
})}
`;

const InfoBadge = styled.span`
  ${font({
  weight: 600,
  Fmax: 9,
  Fmin: 6,
  lineHeight: "289%",
  color: "#018c0f"
})}

  text-align: center;
  justify-content: center;
  border-radius: 100px;
  max-width: 84px;
  width: 100%;
  max-height: 24px;
  background: #d7ffe0;
`;

const PersonalDetails = styled.div`
  ${font({
  weight: 500,
  Fmax: 12,
  Fmin: 8,
  lineHeight: "233%",
  letterSpacing: "0.08em",
  color: `${theme.colors.darkGray}`
})}

    display: flex;
    max-width: 710px;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    gap: 10px;

  @media ${theme.media.mobile}{
    gap: 5px;
  }
`;

const PersonalSmallBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${theme.media.mobile}{
    gap: 5px;
  }
`

const PlaceName = styled.span`
    font-weight: 500;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 40px; 

  @media ${theme.media.mobile}{
    display: none;
    height: 0;
    width: 0;
    opacity: 0;
    margin-left: 0;
    gap: 5px;
  }
`;