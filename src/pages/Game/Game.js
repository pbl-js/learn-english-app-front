import React, { memo, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";
import uuid from "react-uuid";

import useData from "./Game.data";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import LetterByLetter from "components/gameTypes/LetterByLetter/LetterByLetter";
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
  const [gameCourse, setGameCourse] = useState([]);

  const onComplete = () => {
    setCurrentWord((prevState) => prevState + 1);
  };

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });

    data &&
      setGameCourse([
        {
          id: uuid(),
          gameComponent: FirstTime,
          wordItem: data.wordsByTopicId[1],
          complete: false,
        },
        {
          id: uuid(),
          gameComponent: FirstTime,
          wordItem: data.wordsByTopicId[2],
          complete: false,
        },
        {
          id: uuid(),
          gameComponent: FirstTime,
          wordItem: data.wordsByTopicId[3],
          complete: false,
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
                onComplete={onComplete}
              />
            );
          } else {
            return null;
          }
        })}
      {
        // <CompleteComposition
        //   completeComponent={GetPoint}
        //   gameComponent={FirstTime}
        //   wordItem={data.wordsByTopicId[7]}
        // />
        // <CompleteComposition
        //   completeComponent={GetPoint}
        //   gameComponent={LetterByLetter}
        //   wordItem={data.wordsByTopicId[7]}
        // />
      }
    </MainWrapper>
  );
};

export default memo(Game);
