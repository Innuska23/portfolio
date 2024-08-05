import React from 'react';

import { Icon } from "../icon/Icon";
import { S } from "./PersonalInfo_Styles"


type PersonalInfoPropsType = {
  title: string,
  badge: string,
  placeName: string,
  location?: string,
  date: string,
}

export const PersonalInfo: React.FC<PersonalInfoPropsType> = ({ title, badge, placeName, location, date }) => (
  <S.PersonalItem>
    <S.PersonalBoxContainer>
      <S.InfoTitle>{title}</S.InfoTitle>
      <S.InfoBadge>{badge}</S.InfoBadge>
    </S.PersonalBoxContainer>

    <S.PersonalDetails>
      <S.PersonalSmallBox>
        <Icon iconId="build" height="12px" width="12px" viewBox="0 0 12 12" />
        <S.PlaceName>{placeName}</S.PlaceName>

        {location && (
          <S.LocationWrapper>
            <Icon iconId="location" height="12px" width="12px" viewBox="0 0 12 12" />
            <span>{location}</span>
          </S.LocationWrapper>
        )}
      </S.PersonalSmallBox>
      <S.PersonalSmallBox>
        <Icon iconId="date" height="12px" width="16px" viewBox="0 0 12 16" />
        <span>{date}</span>
      </S.PersonalSmallBox>
    </S.PersonalDetails>
  </S.PersonalItem>
);


