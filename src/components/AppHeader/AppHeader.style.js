import styled from "styled-components";
import { breakPoints, depth, layout, animations } from "theme/theme";
import { mediumUppercaseText, normalText, flexRowCenter } from "theme/mixins";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;

  position: fixed;
  z-index: ${depth.highest};
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 ${layout.mainPadding.tablet + "px"};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

  @media ${breakPoints.tablet} {
    left: ${({ visable }) => (visable ? "150px" : 0)};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
    transition: ${animations.appRouteTransition + "s"};
    padding: 0 ${layout.mainPadding.desktop + "px"};
  }
`;

export const Title = styled.div`
  ${mediumUppercaseText}
  ${flexRowCenter}
`;

export const TotalWords = styled.div`
  ${flexRowCenter}
  margin-right: auto;
  ${normalText}
`;
