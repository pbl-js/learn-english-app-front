import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import routes from "router/routes";

import { mediumText, darkModalBackground } from "theme/mixins";
import Modal from "components/Modal/Modal";
import CircleButtonIcon from "components/CircleButtonIcon/CircleButtonIcon";
import { ReactComponent as ExitIcon } from "assets/logout.svg";
import { ReactComponent as ResumeIcon } from "assets/play.svg";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  ${darkModalBackground}
  padding: 30px;

  header {
    ${mediumText}
    margin-bottom: 35px;
  }
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  grid-gap: 20px;
`;

const GamePausedModal = ({ open, startGame }) => {
  const history = useHistory();

  return (
    <Modal open={open} closeModal={startGame}>
      <MainWrapper>
        <header>Czas zatrzymany</header>

        <ButtonsWrapper>
          <CircleButtonIcon
            title="Wyjdź"
            onClick={() => history.push(routes.topics)}
          >
            <ExitIcon />
          </CircleButtonIcon>

          <CircleButtonIcon light={true} title="Wznów" onClick={startGame}>
            <ResumeIcon />
          </CircleButtonIcon>
        </ButtonsWrapper>
      </MainWrapper>
    </Modal>
  );
};

export default GamePausedModal;
