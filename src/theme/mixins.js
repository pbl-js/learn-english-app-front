import { css } from "styled-components";
import { fontSize, fontWeight, layout, colors, breakPoints } from "theme/theme";

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
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.bold};

  @media ${breakPoints.mobileL} {
    font-size: ${fontSize.xl};
  }

  @media ${breakPoints.tablet} {
    font-size: ${fontSize.xxl};
  }
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
  font-size: ${fontSize.xs};
  cursor: pointer;
  background-color: ${({ color }) => color};

  :hover {
    transform: scale(1.05);
  }

  svg {
    fill: white;
    height: 13px;
    width: 13px;
    margin-left: 10px;
  }

  @media ${breakPoints.tablet} {
    font-size: ${fontSize.s};

    svg {
      fill: white;
      height: 20px;
      width: 20px;
      margin-left: 10px;
    }
  }
`;

export const icon = css`
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
  fill: white;

  @media ${breakPoints.tablet} {
    width: 120px;
    height: 120px;
    padding: 30px;
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

export const defaultPaddingLayout = css`
  padding: 70px ${layout.mainPadding.tablet + "px"} 70px
    ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: 70px ${layout.mainPadding.desktop + "px"} 0
      ${layout.mainPadding.desktop + "px"};
  }
`;

export const primaryScrollbar = css`
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    border: 4px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const secondaryScrollbar = css`
  ::-webkit-scrollbar {
    width: 14px;
    background-color: ${colors.purplePrimary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.orangeMenu};
    border-radius: 100px;
    border: 4px solid ${colors.purplePrimary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.orangeMenu};
  }
`;
