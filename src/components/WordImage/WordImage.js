import styled from "styled-components";
import { whiteFilter, bigNormalText } from "theme/mixins";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${bigNormalText}
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  height: 100%;

  img {
    ${whiteFilter}
    width: 100%;
    height: 100%;
  }

  p {
    margin-top: 20px;
  }
`;
