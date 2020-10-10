import styled from "styled-components";
import { bigNormalText, mediumUppercaseText, bigButton } from "theme/mixins";
import { layout, breakPoints, colors } from "theme/theme";

export const MainWrapper = styled.div`
  background-image: ${colors.colorfulTheme.gradient};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;

  padding: ${layout.mainPadding.tablet + 70 + "px"}
    ${layout.mainPadding.tablet + "px"} 70px ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: ${layout.mainPadding.desktop + 70 + "px"}
      ${layout.mainPadding.desktop + "px"} 0
      ${layout.mainPadding.desktop + "px"};
  }
`;

export const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  width: 100%;

  @media ${breakPoints.tablet} {
    grid-gap: 50px;
  }
`;

export const SectionIndicator = styled.span`
  overflow: hidden;
  width: ${`calc(100% + ${layout.mainPadding.tablet + "px"})`};

  @media ${breakPoints.tablet} {
    width: ${`calc(100% + ${layout.mainPadding.desktop + "px"})`};
  }
`;

export const InnerSectionIndicator = styled.span`
  height: 112px;
  width: 10000px;
  display: flex;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    height: 150px;
  }
`;

export const TitleIndicator = styled.span`
  display: block;
  height: 19px;
  width: 200px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);

  @media ${breakPoints.tablet} {
    height: 24px;
    width: 280px;
    margin-bottom: 25px;
  }
`;

export const TopicIndicator = styled.span`
  display: block;
  width: 150px;
  height: 112px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);

  @media ${breakPoints.tablet} {
    width: 200px;
    height: 150px;
    margin-right: 15px;
    border-radius: 25px;
  }
`;
