import React, { memo, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "router/routes";
import { TimerContext } from "context/TimerContext";
import Omg from "./Omg";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Game = (props) => {
  // const { startTimer, stopTimer } = useContext(TimerContext);
  console.log("object");

  return (
    <MainWrapper>
      <h1>Game</h1>
      <h1>Game</h1>
      <Link to={routes.topics}>Ognia</Link>
      <Omg />
      {/* <h2>{time}</h2> */}
      {/* <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button> */}
    </MainWrapper>
  );
};

export default memo(Game);
