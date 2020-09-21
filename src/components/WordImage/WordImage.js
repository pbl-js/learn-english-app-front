import styled from "styled-components";
import { whiteFilter, bigNormalText } from "theme/mixins";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${bigNormalText}

  img {
    margin-bottom: 20px;
    ${whiteFilter}
    width: 250px;
    height: 250px;
  }
`;
