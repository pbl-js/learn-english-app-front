import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { colors } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

export const GradientWrapper = styled(GradientBackground)`
  ${flexColumnCenter}
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  padding: 90px 30px 30px 30px;
  border-radius: 20px;
  background-color: ${colors.purpleAuthDark};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const InnerWrapper = styled.div``;
