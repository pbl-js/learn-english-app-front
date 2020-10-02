import React, { memo, useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";
import { useBackgroundDispatch } from "context/BackgroundContext";
import uuid from "react-uuid";

import useWordsByTopicId from "apollo/useWordsByTopicId";
import getRandomInt from "helpers/getRandomInt";

import CompleteComposition from "components/gameTypes/CompleteComposition/CompleteComposition";
////////////////////////////////////////////////////////////////////////////////////////
import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import LetterByLetter from "components/gameTypes/LetterByLetter/LetterByLetter";
// import LettersSnake from "components/gameTypes/LettersSnake/LettersSnake";
import SwipeCorrectFour from "components/gameTypes/SwipeCorrectFour/SwipeCorrectFour";
import SwipeCorrectTwo from "components/gameTypes/SwipeCorrectTwo/SwipeCorrectTwo";
import TrueFalse from "components/gameTypes/TrueFalse/TrueFalse";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const genGameComponent = (status) => {
  const learningRandomComponent = () => {
    const learningGameVariants = [SwipeCorrectTwo, SwipeCorrectFour];
    const index = getRandomInt(0, learningGameVariants.length);

    return learningGameVariants[index];
  };

  const masteringRandomComponent = () => {
    const learningGameVariants = [
      SwipeCorrectTwo,
      SwipeCorrectFour,
      LetterByLetter,
    ];
    const index = getRandomInt(0, learningGameVariants.length);

    return learningGameVariants[index];
  };

  switch (status) {
    case "unseen":
      // return FirstTime;
      return learningRandomComponent();
    case "learning":
      return learningRandomComponent();
    case "mastering":
      return masteringRandomComponent();
    case "complete":
      return FirstTime;
    default:
      break;
  }
};

const genGameCourse = (wordItem) => {
  return {
    id: uuid(),
    // gameComponent: genGameComponent(wordItem.progress.status),
    gameComponent: SwipeCorrectFour,
    wordItem: wordItem,
  };
};

const Game = (props) => {
  const dispatch = useTimerDispatch();
  const { handle } = useParams();
  const { setRandomTheme } = useBackgroundDispatch();

  const { data, error, loading } = useWordsByTopicId(handle);
  const [gameProgress, setGameProgress] = useState(0);
  const [gameCourse, setGameCourse] = useState([]);

  const addGameItem = useCallback(() => {
    setGameCourse((prevState) => {
      const newState = prevState.map((item) => item);
      const index = getRandomInt(0, data.wordsByTopicId.length);
      newState.push(genGameCourse(data.wordsByTopicId[index]));
      return newState;
    });
  }, [data]);

  const onFinish = () => {
    setGameProgress((prevState) => prevState + 1);
    addGameItem();
  };

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
    return () => dispatch({ type: "STOP_CLOCK" });
  }, [dispatch]);

  useEffect(() => {
    setRandomTheme();
  }, [gameProgress]);

  useEffect(() => {
    data && addGameItem();
  }, [data]);

  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default memo(Game);
