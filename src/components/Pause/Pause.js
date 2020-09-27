import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import { ReactComponent as PauseIcon } from "assets/pause.svg";
import { flexRowCenter } from "theme/mixins";
import GamePausedModal from "components/GamePausedModal/GamePausedModal";

const MainWrapper = styled.button`
  ${flexRowCenter}
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: 999px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  svg {
    fill: white;
    width: 15px;
    height: 15px;
  }
`;

const Pause = () => {
  const dispatch = useTimerDispatch();
  const [open, setOpen] = useState(false);

  console.log("object");

  const pauseGame = useCallback(() => {
    dispatch({ type: "STOP_CLOCK" });
    setOpen(true);
  }, [open]);

  const startGame = useCallback(() => {
    dispatch({ type: "START_CLOCK" });
    setOpen(false);
  }, [open]);

  return (
    <>
      <MainWrapper onClick={pauseGame}>
        <PauseIcon />
      </MainWrapper>
      <GamePausedModal open={open} startGame={startGame} />
    </>
  );
};

export default Pause;
