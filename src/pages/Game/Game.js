import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";
import { useTimerDispatch } from "context/TimerContext";

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

  useEffect(() => {
    console.log(props.match.params.handle);
  }, []);

  return (
    <MainWrapper>
      <h1>Game</h1>
      <Link to={routes.topics}>Ognia</Link>
      <button onClick={() => dispatch({ type: "START_CLOCK" })}>Start</button>
      <button onClick={() => dispatch({ type: "STOP_CLOCK" })}>Stop</button>
    </MainWrapper>
  );
};

export default memo(Game);
