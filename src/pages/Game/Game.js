import React, { memo, useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTimerDispatch } from "context/TimerContext";
import { useBackgroundDispatch } from "context/BackgroundContext";

import useGameData from "./Game.data";
import getRandomInt from "helpers/getRandomInt";
import genGameType from "./genGameType";

import { MainWrapper, OverflowWrapper } from "./Game.style";
import GameFooter from "components/GameFooter/GameFooter";
import CompleteComposition from "components/gameTypes/CompleteComposition/CompleteComposition";

const Game = () => {
  const dispatch = useTimerDispatch();
  const { dispatch: backgroundDispatch } = useBackgroundDispatch();
  const { handle } = useParams();

  const { data, error, loading } = useGameData(handle);
  const [gameProgress, setGameProgress] = useState(0);
  const [gameCourse, setGameCourse] = useState([]);

  const addGameItem = useCallback(() => {
    setGameCourse((prevState) => {
      const newState = prevState.map((item) => item);
      const index = getRandomInt(0, data.wordsByTopicId.length);
      newState.push(genGameType(data.wordsByTopicId[index]));
      return newState;
    });
  }, [data]);

  const onFinish = () => {
    setGameProgress((prevState) => prevState + 1);
    addGameItem();
  };

  useEffect(() => {
    gameCourse[gameProgress] &&
      backgroundDispatch({
        type: "SET_THEME",
        payload: gameCourse[gameProgress].theme,
      });
  }, [gameCourse, gameProgress]);

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
    return () => dispatch({ type: "STOP_CLOCK" });
  }, [dispatch]);

  useEffect(() => {
    data && addGameItem();
  }, [data]);

  return (
    <OverflowWrapper>
      <MainWrapper id="gameContainer">
        {data &&
          gameCourse.map((gameItem, index) => {
            if (index === gameProgress) {
              return (
                <CompleteComposition
                  key={gameItem.id}
                  gameComponent={gameItem.gameComponent}
                  wordItem={gameItem.wordItem}
                  allWords={data.wordsByTopicId}
                  onFinish={onFinish}
                />
              );
            } else {
              return null;
            }
          })}
        <GameFooter topicId={handle} />
      </MainWrapper>
    </OverflowWrapper>
  );
};

export default memo(Game);
