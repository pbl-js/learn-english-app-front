import React from "react";
import styled from "styled-components";
import { colors } from "theme/theme";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1000px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: ${({ progressPercent }) =>
      "translate( -" + progressPercent + "% )"};
    background-color: ${({ mastering }) =>
      mastering ? colors.yellow : "white"};
  }
`;

const ProgressBar = ({ progress, mastering }) => {
  const progressPercent = 100 - (progress.value * 100) / progress.total;

  return (
    <MainWrapper progressPercent={progressPercent} mastering={mastering}>
      <div />
    </MainWrapper>
  );
};

export default ProgressBar;
