import styled from "styled-components";
import { breakPoints, depth } from "theme/theme";

export const StyledMain = styled.main`
  position: relative;
  z-index: ${depth.lowest};

  @media ${breakPoints.tablet} {
    margin-left: ${({ visable }) => (visable ? "150px" : 0)};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
    transition: 0.5s;
  }
`;
