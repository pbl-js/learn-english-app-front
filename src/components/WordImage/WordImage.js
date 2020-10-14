import styled from "styled-components";
import { whiteFilter, bigNormalText } from "theme/mixins";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-items: center;
  ${bigNormalText}
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  height: 100%;

  img {
    ${whiteFilter}
    width: 100%;
    max-height: 180px;
  }

  p {
    margin-top: 20px;
  }
`;
