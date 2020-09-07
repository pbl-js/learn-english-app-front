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

const ProgressStatus = ({ mastering, progress, complete }) => {
  return (
    <MainWrapper>
      <ProgressBar progress={progress} mastering={mastering} />
      <ProgressIcon mastering={mastering} complete={complete} />
    </MainWrapper>
  );
};

export default ProgressStatus;
