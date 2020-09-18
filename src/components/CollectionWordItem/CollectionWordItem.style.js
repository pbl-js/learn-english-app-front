import styled from "styled-components";
import { fontSize, fontWeight } from "theme/theme";
import { normalText, mediumText } from "theme/mixins";

export const MainWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr auto;
  grid-gap: 30px;
  align-items: center;
`;

export const WordIcon = styled.img`
  width: 70px;
  filter: invert(100%) sepia(0%) saturate(7460%) hue-rotate(169deg)
    brightness(113%) contrast(100%);
  opacity: ${({ unseen }) => (unseen ? 0.4 : 1)};
`;

export const InnerWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  h3 {
    ${mediumText}
    opacity: ${({ unseen }) => (unseen ? 0.4 : 1)};
  }

  p {
    ${normalText}
    opacity: 0.6;
  }
`;

export const ProgressWrapper = styled.div`
  height: 8px;
`;
