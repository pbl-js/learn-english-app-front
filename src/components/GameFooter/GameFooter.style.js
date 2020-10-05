import styled from "styled-components";
import { normalText } from "theme/mixins";
import { layout, breakPoints } from "theme/theme";

export const MainWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  padding: 0 ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: 0 ${layout.mainPadding.desktop + "px"};
  }
`;

export const ShowTopicData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${normalText};
  cursor: pointer;
  margin-right: auto;

  svg {
    width: 25px;
    height: 25px;
    fill: white;
    transform: rotate(180deg);
    margin-right: 15px;
  }
`;
