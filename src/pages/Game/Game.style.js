import styled from "styled-components";
import { breakPoints, layout } from "theme/theme";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: ${layout.mainPadding.desktop + "px"};
  }
`;

export const OverflowWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 70px 0;
`;
