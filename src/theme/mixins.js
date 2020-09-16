import { css } from "styled-components";
import { fontSize, fontWeight, colors } from "theme/theme";

export const mediumUppercaseText = css`
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const bigNormalText = css`
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
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

export const bigButton = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  border: 0;
  border-radius: 1000px;
  color: white;
  text-transform: uppercase;
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.s};
  cursor: pointer;
  background-color: ${colors.orangeMenu};

  :hover {
    transform: scale(1.05);
  }

  svg {
    fill: white;
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
`;
