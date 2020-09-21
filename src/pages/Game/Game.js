import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import useData from "./Game.data";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";

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
  const { data, error, loading } = useData(handle);

  // console.log(data && data.wordsByTopicId[0]);

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
  }, []);

  return (
    <MainWrapper>
      {data && <FirstTime wordItem={data.wordsByTopicId[7]} />}
    </MainWrapper>
  );
};

export default memo(Game);
