import styled from "styled-components";
import WordImage from "components/WordImage/WordImage";
import { icon } from "theme/mixins";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "item1 center item2"
    "item3 center item4";
  align-items: center;
  justify-items: center;
`;

export const CenterItem = styled(WordImage)`
  grid-area: center;
  ${icon}
`;
