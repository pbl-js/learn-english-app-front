import styled from "styled-components";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding: ${({ withPadding }) => (withPadding ? "20px 10px" : null)};

  @media ${breakPoints.mobileM} {
    padding: ${({ withPadding }) => (withPadding ? "30px" : null)};
    grid-gap: 30px;
  }

  @media ${breakPoints.mobileL} {
    padding: ${({ withPadding }) => (withPadding ? "50px" : null)};
  }
`;
