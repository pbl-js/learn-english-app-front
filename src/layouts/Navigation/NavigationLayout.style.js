import styled from "styled-components";
import { breakPoints } from "theme/theme";

export const StyledMain = styled.main`
  position: relative;
  z-index: 1;
  width: 100%;

  @media ${breakPoints.tablet} {
    margin-left: 150px;
    width: calc(100% - 150px);
  }
`;
