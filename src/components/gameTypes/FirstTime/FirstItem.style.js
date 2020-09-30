import styled from "styled-components";
import { ReactComponent as LearnIcon } from "assets/learn.svg";
import { ReactComponent as HideIcon } from "assets/hide.svg";
import { icon } from "theme/mixins";

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

export const Hide = styled(HideIcon)`
  ${icon}
`;

export const Learn = styled(LearnIcon)`
  ${icon}
`;
