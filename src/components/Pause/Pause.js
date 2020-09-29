import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useTimerDispatch } from "context/TimerContext";

import { ReactComponent as PauseIcon } from "assets/pause.svg";
import { flexRowCenter } from "theme/mixins";
import GamePausedModal from "components/GamePausedModal/GamePausedModal";
import FadeInSlideInModal from "layouts/FadeInSlideInModal/FadeInSlideInModal";

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
  const [isOpen, setIsOpen] = useState(false);

  console.log("object");

  const pauseGame = useCallback(() => {
    dispatch({ type: "STOP_CLOCK" });
    setIsOpen(true);
  }, [isOpen]);

  const startGame = useCallback(() => {
    dispatch({ type: "START_CLOCK" });
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <MainWrapper onClick={pauseGame}>
        <PauseIcon />
      </MainWrapper>

      <FadeInSlideInModal isOpen={isOpen}>
        <GamePausedModal startGame={startGame} />
      </FadeInSlideInModal>
    </>
  );
};

export default Pause;
