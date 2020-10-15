import styled from "styled-components";
import { whiteFilter, bigNormalText } from "theme/mixins";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  ${bigNormalText}
  width: 100%;

  img {
    ${whiteFilter}
    height: 100px;
    width: 100px;
  }

  @media ${breakPoints.tablet} {
    img {
      height: 150px;
      width: 150px;
    }
  }
`;
