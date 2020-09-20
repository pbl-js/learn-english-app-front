import { css } from "styled-components";
import { fontSize, fontWeight, colors, breakPoints } from "theme/theme";

export const mediumUppercaseText = css`
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.semiBold};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media ${breakPoints.mobileL} {
    font-size: ${fontSize.s};
  }
`;

export const bigNormalText = css`
  font-size: ${fontSize.xxl};
  font-weight: ${fontWeight.bold};
`;

export const mediumText = css`
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.semiBold};

  @media ${breakPoints.mobileL} {
    font-size: ${fontSize.s};
  }
`;

export const normalText = css`
  font-size: ${fontSize.xxs};
  font-weight: ${fontWeight.semiBold};

  @media ${breakPoints.mobileL} {
    font-size: ${fontSize.xs};
  }
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

export const darkModalBackground = css`
  border-radius: 20px;
  background-color: ${colors.purpleModalDark};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  color: white;
`;

export const whiteFilter = css`
  filter: invert(100%) sepia(0%) saturate(7460%) hue-rotate(169deg)
    brightness(113%) contrast(100%);
`;
