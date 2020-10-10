import styled from "styled-components";
import { colors } from "theme/theme";

export default styled.div`
  position: absolute;
  z-index: ${({ index }) => index};
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: ${({ gradient }) => gradient};
`;
