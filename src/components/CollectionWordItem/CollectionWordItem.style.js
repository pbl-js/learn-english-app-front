import styled from "styled-components";
import { fontSize, fontWeight, breakPoints } from "theme/theme";
import { normalText, mediumText, whiteFilter } from "theme/mixins";

export const MainWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;

  @media ${breakPoints.mobileL} {
    grid-gap: 30px;
  }
`;

export const WordIcon = styled.img`
  width: 50px;
  ${whiteFilter}
  opacity: ${({ unseen }) => (unseen ? 0.4 : 1)};

  @media ${breakPoints.mobileL} {
    width: 70px;
  }
`;

export const InnerWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  h3 {
    ${mediumText}
    opacity: ${({ unseen }) => (unseen ? 0.4 : 1)};
  }

  p {
    ${normalText}
    opacity: 0.6;
  }

  @media ${breakPoints.mobileL} {
    grid-gap: 15px;
  }
`;

export const ProgressWrapper = styled.div`
  height: 8px;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 10px;
  border-radius: 1000px;
  cursor: pointer;
  outline: 0;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 25px;
    height: 25px;
    fill: white;
  }

  @media ${breakPoints.mobileL} {
    svg {
      width: 35px;
      height: 35px;
      fill: white;
    }
  }
`;
