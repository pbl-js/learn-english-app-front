import React, { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";
import { useBackgroundDispatch } from "context/BackgroundContext";
import uuid from "react-uuid";

import useWordsByTopicId from "apollo/useWordsByTopicId";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import LetterByLetter from "components/gameTypes/LetterByLetter/LetterByLetter";
import LettersSnake from "components/gameTypes/LettersSnake/LettersSnake";
import SwipeCorrectFour from "components/gameTypes/SwipeCorrectFour/SwipeCorrectFour";
import SwipeCorrectTwo from "components/gameTypes/SwipeCorrectTwo/SwipeCorrectTwo";
import TrueFalse from "components/gameTypes/TrueFalse/TrueFalse";
import CompleteComposition from "components/gameTypes/CompleteComposition/CompleteComposition";

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

const Game = (props) => {
  const dispatch = useTimerDispatch();
  const { setRandomTheme } = useBackgroundDispatch();
  const { handle } = useParams();
  const { data, error, loading } = useWordsByTopicId(handle);

  const [currentWord, setCurrentWord] = useState(0);
  const [gameCourse, setGameCourse] = useState([]);

  const onFinish = () => {
    setCurrentWord((prevState) => prevState + 1);
  };

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
    return () => dispatch({ type: "STOP_CLOCK" });
  }, [dispatch]);

  useEffect(() => {
    setRandomTheme();
  }, [currentWord]);

  useEffect(() => {
    data &&
      setGameCourse([
        {
          id: uuid(),
          gameComponent: SwipeCorrectFour,
          wordItem: data.wordsByTopicId[1],
        },
        {
          id: uuid(),
          gameComponent: SwipeCorrectTwo,
          wordItem: data.wordsByTopicId[2],
        },
        {
          id: uuid(),
          gameComponent: SwipeCorrectFour,
          wordItem: data.wordsByTopicId[3],
        },
      ]);
  }, [data]);

  return (
    <MainWrapper>
      {data &&
        gameCourse.map((gameItem, index) => {
          if (index === currentWord) {
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
