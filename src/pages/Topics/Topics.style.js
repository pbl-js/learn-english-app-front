import styled from "styled-components";
import { bigNormalText, mediumUppercaseText, bigButton } from "theme/mixins";
import { layout, breakPoints, colors } from "theme/theme";

export const MainWrapper = styled.div`
  min-height: 3140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 70px;

  padding: 70px ${layout.mainPadding.tablet + "px"} 70px
    ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: 70px ${layout.mainPadding.desktop + "px"} 0
      ${layout.mainPadding.desktop + "px"};
  }
`;

export const LastTopicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  height: 260px;
  margin: 35px 0;

  h1 {
    ${mediumUppercaseText}
  }

  h2 {
    ${bigNormalText}
  }

  div {
    height: 12px;
    width: 140px;
  }

  button {
    ${bigButton}
    margin-right: auto;
  }

  @media ${breakPoints.tablet} {
    margin: 50px 0;
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
