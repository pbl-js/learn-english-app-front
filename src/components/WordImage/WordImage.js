import styled from "styled-components";
import { whiteFilter, bigNormalText } from "theme/mixins";
import { breakPoints } from "theme/theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${bigNormalText}

  img {
    ${whiteFilter}
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 20px;
  }

  @media ${breakPoints.tablet} {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
