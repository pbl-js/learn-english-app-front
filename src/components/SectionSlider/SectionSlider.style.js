import styled from "styled-components";
import { layout, breakPoints } from "theme/theme";
import { mediumUppercaseText } from "theme/mixins";

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  ${mediumUppercaseText}
  margin-bottom: 15px;

  @media ${breakPoints.tablet} {
    margin-bottom: 25px;
  }
`;

export const TopicsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: ${"-" + layout.mainPadding.tablet + "px"};
  width: ${`calc(100% + ${layout.mainPadding.tablet * 2 + "px"})`};
  height: 112px;

  @media ${breakPoints.tablet} {
    height: 150px;
    margin-left: ${"-" + layout.mainPadding.desktop + "px"};
    width: ${`calc(100% + ${layout.mainPadding.desktop * 2 + "px"})`};
  }
`;

export const InnerTopicsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 10px;
  }

  & > div:last-child {
    margin-right: ${layout.mainPadding.tablet + "px"};
  }

  & > div:first-child {
    margin-left: ${layout.mainPadding.tablet + "px"};
  }

  @media ${breakPoints.tablet} {
    & > div {
      margin-right: 15px;
    }

    & > div:last-child {
      margin-right: ${layout.mainPadding.desktop + "px"};
    }

    & > div:first-child {
      margin-left: ${layout.mainPadding.desktop + "px"};
    }
  }
`;
