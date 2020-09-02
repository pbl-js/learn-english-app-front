import styled from "styled-components";
import { breakPoints, depth } from "theme/theme";

export const StyledMain = styled.main`
  position: relative;
  z-index: ${depth.lowest};
  width: 100%;

  @media ${breakPoints.tablet} {
    margin-left: 150px;
    width: calc(100% - 150px);
  }
`;
