import styled, { css } from "styled-components";
import { ReactComponent as LearnIcon } from "assets/learn.svg";
import { ReactComponent as HideIcon } from "assets/hide.svg";
import { breakPoints } from "theme/theme";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-top: 70px;
`;

const icon = css`
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
  fill: white;

  @media ${breakPoints.tablet} {
    width: 120px;
    height: 120px;
    padding: 30px;
  }
`;

export const Hide = styled(HideIcon)`
  ${icon}
`;

export const Learn = styled(LearnIcon)`
  ${icon}
`;
