import React from "react";
import styled from "styled-components";

import { normalText } from "theme/mixins";
import { layout, breakPoints } from "theme/theme";
import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const MainWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  padding: 0 ${layout.mainPadding.tablet + "px"};

  @media ${breakPoints.tablet} {
    padding: 0 ${layout.mainPadding.desktop + "px"};
  }
`;

const ShowTopicData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${normalText};
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    fill: white;
    transform: rotate(180deg);
    margin-right: 15px;
  }
`;

const GameFooter = () => {
  return (
    <MainWrapper>
      <ShowTopicData>
        <Arrow />
        Jedzenie
      </ShowTopicData>
      {/* <ProgressStatus /> */}
    </MainWrapper>
  );
};

export default GameFooter;
