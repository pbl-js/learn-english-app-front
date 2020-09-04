import styled from "styled-components";
import { flexColumnCenter } from "theme/mixins";
import { colors, fontSize, fontWeight } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

export const GradientWrapper = styled(GradientBackground)`
  ${flexColumnCenter}
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 400px;
  padding: 90px 30px 30px 30px;
  border-radius: 20px;
  background-color: ${colors.purpleAuthDark};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: 0.2s;

  form {
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 10px;
      }

      input {
        padding: 15px;
        border: none;
        border-radius: 5px;
        background-color: ${colors.purpleAuthMedium};
        color: white;
        margin-bottom: 10px;
      }

      div {
        color: red;
        font-weight: ${fontWeight.semiBold};
        font-size: ${fontSize.xxs};
      }
    }

    button {
      width: 200px;
      margin: 10px auto 0 auto;
      padding: 15px;
      border: 0;
      border-radius: 1000px;
      color: white;
      text-transform: uppercase;
      font-weight: ${fontWeight.semiBold};
      font-size: ${fontSize.xs};
      cursor: pointer;
      background-color: ${colors.orangeMenu};
    }
  }
`;
