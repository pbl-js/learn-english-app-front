import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import useData from "./Game.data";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Game = (props) => {
  const dispatch = useTimerDispatch();
  const { handle } = useParams();
  const data = useData(handle);

  console.log("game");

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
  }, []);

  return (
    <MainWrapper>
      <h1>Game</h1>
    </MainWrapper>
  );
};

export default memo(Game);
