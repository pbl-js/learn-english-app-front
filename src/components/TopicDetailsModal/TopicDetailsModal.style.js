import styled from "styled-components";
import { breakPoints, layout } from "theme/theme";
import { ReactComponent as CloseIcon } from "assets/closeLight.svg";
import { primaryScrollbar } from "theme/mixins";

export const MainWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${({ darkColor, color }) =>
    "linear-gradient(135deg," + darkColor + "," + color + ")"};

  overflow: auto;
  ${primaryScrollbar}

  padding: ${layout.mainPadding.tablet + "px"};
  padding-top: 90px;

  @media ${breakPoints.tablet} {
    padding: ${layout.mainPadding.desktop + "px"};
    padding-top: 90px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 80px;
`;

export const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color};
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  fill: white;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    top: 30px;
    left: 50px;
    width: 30px;
    height: 30px;
  }
`;
