import React from "react";
import styled from "styled-components";

import ProgressBar from "components/ProgressBar/ProgressBar";
import ProgressIcon from "components/ProgressIcon/ProgressIcon";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: auto;

  svg {
    margin-left: 8px;
  }
`;

const ProgressStatus = ({ progressData }) => {
  const { status, learningProgress, masteringProgress } = progressData;
  const isMastering = status === "mastering" ? true : false;
  const isComplete = status === "complete" ? true : false;

  return (
    <MainWrapper>
      <ProgressBar
        progress={isMastering ? masteringProgress : learningProgress}
        mastering={isMastering}
      />
      <ProgressIcon mastering={isMastering} complete={isComplete} />
    </MainWrapper>
  );
};

export default ProgressStatus;
