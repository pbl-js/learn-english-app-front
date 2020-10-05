import React from "react";
import styled from "styled-components";

import { bigNormalText, mediumUppercaseText, bigButton } from "theme/mixins";
import { breakPoints, colors } from "theme/theme";

import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import { ReactComponent as Play } from "assets/play.svg";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  & > h1 {
    ${mediumUppercaseText}
  }

  & > h2 {
    ${bigNormalText}
  }

  & > div {
    height: 12px;
    width: 140px;
  }

  & > button {
    ${bigButton}
    background-color: ${({ isContinue, color }) =>
      isContinue ? colors.orangeMenu : color};
    margin-right: auto;
  }

  @media ${breakPoints.tablet} {
    grid-gap: 30px;
  }
`;

const BigTopicItem = ({ topicItem, isContinue, withButton = true }) => {
  return (
    <MainWrapper color={topicItem.section.color} isContinue={isContinue}>
      <h1>{topicItem.section.title}</h1>
      <h2>{topicItem.title}</h2>

      <div>
        <ProgressStatus progressData={topicItem.progress} />
      </div>

      {withButton && (
        <button>
          {isContinue ? "Kontynuuj" : "start"} <Play />
        </button>
      )}
    </MainWrapper>
  );
};

export default BigTopicItem;
