import styled from "styled-components";
import { ReactComponent as LearnIcon } from "assets/learn.svg";
import { ReactComponent as HideIcon } from "assets/hide.svg";
import { icon } from "theme/mixins";
import { breakPoints } from "theme/theme";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media ${breakPoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const ColorCircle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1000px;
  display: block;
  width: 220px;
  height: 220px;
  background-color: ${({ color }) => (color ? color : "white")};
`;

export const Hide = styled(HideIcon)`
  ${icon};
`;

export const Learn = styled(LearnIcon)`
  ${icon}
`;
