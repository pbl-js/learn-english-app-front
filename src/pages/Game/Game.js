import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import useData from "./Game.data";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import GetPoint from "components/gameTypes/GetPoint/GetPoint";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const fakeData = [
  {
    eng: "bread",
    pl: "chleb",
    status: "learning",
    img: "https://www.flaticon.com/svg/static/icons/svg/58/58270.svg",
    progress: {
      learningProgress: {
        value: 30,
        total: 100,
      },
      masteringProgress: {
        value: 0,
        total: 100,
      },
    },
  },
];

const Game = (props) => {
  const dispatch = useTimerDispatch();
  const { handle } = useParams();
  const { data, error, loading } = useData(handle);

  console.log(data && data.wordsByTopicId[0]);

  useEffect(() => {
    dispatch({ type: "START_CLOCK" });
  }, []);

  return (
    <MainWrapper>
      {data && <FirstTime wordItem={data.wordsByTopicId[7]} />}
      {/* {data && <GetPoint wordItem={data.wordsByTopicId[7]} />} */}
    </MainWrapper>
  );
};

export default memo(Game);
