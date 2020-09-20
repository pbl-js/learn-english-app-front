import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";
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
  const data = useData(props.match.params.handle);

  console.log(data);

  useEffect(() => {
    console.log(props.match.params.handle);
    dispatch({ type: "START_CLOCK" });
  }, []);

  return (
    <MainWrapper>
      <h1>Game</h1>
    </MainWrapper>
  );
};

export default memo(Game);
