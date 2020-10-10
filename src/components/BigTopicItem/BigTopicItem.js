import React from "react";
import styled from "styled-components";

import { bigNormalText, mediumUppercaseText, bigButton } from "theme/mixins";
import { breakPoints, colors } from "theme/theme";

import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import { ReactComponent as Play } from "assets/play.svg";
import { ReactComponent as Reset } from "assets/backArrow.svg";

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  & > h1 {
    ${mediumUppercaseText}
  }

  & > h2 {
    ${bigNormalText}
  }

  @media ${breakPoints.tablet} {
    grid-gap: 30px;
  }
`;

const ProgressStatusWrapper = styled.div`
  height: 12px;
  width: 140px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  button {
    ${bigButton}
    background-color: ${({ isContinue, color }) =>
      isContinue ? colors.orangeMenu : color};
    margin-right: auto;
  }
`;

const BigTopicItem = ({
  topicItem,
  isContinue,
  withButton = true,
  resetTopic = false,
}) => {
  return (
    <MainWrapper>
      <h1>{topicItem.section.title}</h1>
      <h2>{topicItem.title}</h2>

      <ProgressStatusWrapper>
        <ProgressStatus progressData={topicItem.progress} />
      </ProgressStatusWrapper>

      <ButtonWrapper color={topicItem.section.color} isContinue={isContinue}>
        {withButton && (
          <button>
            {isContinue ? "Kontynuuj" : "start"} <Play />
          </button>
        )}

        {resetTopic && (
          <button onClick={resetTopic}>
            Resetuj <Reset />
          </button>
        )}
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default BigTopicItem;
