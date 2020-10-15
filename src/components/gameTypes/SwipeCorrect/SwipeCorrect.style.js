import styled, { css } from "styled-components";
import { bigNormalText } from "theme/mixins";
import { breakPoints } from "theme/theme";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "item1 "
    "center "
    "item2";
  align-items: center;
  justify-items: center;

  @media ${breakPoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "item1 center item2";
  }

  ${({ wordsCount }) =>
    wordsCount === 4 &&
    css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        "item1 item2"
        "center center"
        "item3 item4";

      @media ${breakPoints.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
          "item1 center item2"
          "item3 center item4";
      }
    `}
`;

export const CenterItem = styled.div`
  grid-area: center;
  ${bigNormalText};
`;
