import { css } from "styled-components";
import { fontSize, fontWeight } from "theme/theme";

export const mediumUppercaseText = css`
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
`;

export const flexRowCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const normalText = css`
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.semiBold};
`;
