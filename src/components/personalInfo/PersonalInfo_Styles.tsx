import styled from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme.styled";

const PersonalItem = styled.div`
  max-width: 710px;
  width: 100%;
  padding: 0 8px;
  position: relative;
  z-index: 0;
  div {
    display: flex;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 696px;
    height: 2px;
    z-index: -1;
    border: 1px solid #ebeaed;
  }
`;

const PersonalBoxContainer = styled.div`
  align-items: baseline;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const InfoTitle = styled.h3`
  ${font({
  weight: 400,
  Fmax: 20,
  Fmin: 12,
  lineHeight: "140%",
  letterSpacing: "0.05em",
  color: `${theme.colors.secondaryText}`,
})}
`;

const InfoBadge = styled.span`
  ${font({
  weight: 600,
  Fmax: 9,
  Fmin: 6,
  lineHeight: "289%",
  color: `${theme.colors.badge}`,
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
  color: `${theme.colors.darkGray}`,
})}

  display: flex;
  max-width: 710px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media ${theme.media.mobile} {
    gap: 5px;
  }
`;

const PersonalSmallBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${theme.media.mobile} {
    gap: 5px;
  }
`;

const PlaceName = styled.span`
  font-weight: 500;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${theme.media.mobile} {
    display: none;
    height: 0;
    width: 0;
    opacity: 0;
    margin-left: 0;
    gap: 5px;
  }
`;

export const S = {
  PersonalItem,
  PersonalBoxContainer,
  InfoTitle,
  InfoBadge,
  PersonalDetails,
  PersonalSmallBox,
  PlaceName,
  LocationWrapper,
};
