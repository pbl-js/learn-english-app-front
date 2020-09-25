import React from "react";
import styled from "styled-components";
import { useTimerState } from "context/TimerContext";
import formatTime from "helpers/formatTime";

import { flexRowCenter, normalText } from "theme/mixins";
import { ReactComponent as Clock } from "assets/timer.svg";

const MainWrapper = styled.div`
  ${flexRowCenter}
  margin-left: auto;
  ${normalText}

  svg {
    fill: white;
    width: 35px;
    height: 35px;
    margin-left: 10px;
  }
`;

const Timer = () => {
  const { time } = useTimerState();

  return (
    <MainWrapper>
      {formatTime(time)} <Clock />
    </MainWrapper>
  );
};

export default Timer;
