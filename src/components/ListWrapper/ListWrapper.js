import styled from "styled-components";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  padding: 20px 10px;

  @media ${breakPoints.mobileM} {
    padding: 30px;
    grid-gap: 30px;
  }

  @media ${breakPoints.mobileL} {
    padding: 50px;
  }
`;
