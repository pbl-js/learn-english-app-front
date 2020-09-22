import React, { memo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import useData from "./Game.data";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import GetPoint from "components/gameTypes/GetPoint/GetPoint";
import CompleteComposition from "components/gameTypes/CompleteComposition/CompleteComposition";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const randomIndex = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

const Game = (props) => {
  const dispatch = useTimerDispatch();
  const { handle } = useParams();
  const { data, error, loading } = useData(handle);

  const [currentWord, setCurrentWord] = useState(0);
  const [currentGameType, setCurrentGameType] = useState("firstTime");

  const newGame = () => {
    if (currentGameType === "firstTime") {
      return null;
    }
  };

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
  }, []);

  useEffect(() => {}, [data]);

  return (
    <MainWrapper>
      {data && (
        <CompleteComposition
          completeComponent={GetPoint}
          gameComponent={FirstTime}
          wordItem={data.wordsByTopicId[7]}
        />
      )}
    </MainWrapper>
  );
};

export default memo(Game);
