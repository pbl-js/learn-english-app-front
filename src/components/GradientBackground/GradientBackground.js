import styled from "styled-components";
import { colors } from "theme/theme";

export default styled.div`
  position: absolute;
  z-index: ${({ index }) => index};
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-image: ${({ color }) => {
    switch (color) {
      case "orange":
        return colors.orangeGradient;
      case "blue":
        return colors.blueGradient;
      case "green":
        return colors.greenGradient;
      case "purple":
        return colors.purpleGradient;
      default:
        return colors.purpleGradient;
    }
  }};
`;
