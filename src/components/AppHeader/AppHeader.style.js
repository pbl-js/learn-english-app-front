import styled from "styled-components";
import { breakPoints, depth, layout } from "theme/theme";
import { mediumUppercaseText, normalText, flexRowCenter } from "theme/mixins";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  z-index: ${depth.highest};
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 ${layout.mainPadding.tablet};
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);

  @media ${breakPoints.tablet} {
    left: ${({ visable }) => (visable ? "150px" : 0)};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
    transition: 0.5s;
    padding: 0 ${layout.mainPadding.desktop};
  }
`;

export const Title = styled.div`
  ${mediumUppercaseText}
  ${flexRowCenter}
`;

export const Timer = styled.div`
  ${flexRowCenter}
  ${normalText}

  svg {
    fill: white;
    width: 35px;
    height: 35px;
    margin-left: 10px;
  }
`;

export const TotalWords = styled.div`
  ${flexRowCenter}
  ${normalText}
`;
