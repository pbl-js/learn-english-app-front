import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import routes from "router/routes";
import { colors } from "theme/theme";

import { mediumText, darkModalBackground } from "theme/mixins";
import ModalPortal from "components/ModalPortal/ModalPortal";
import CircleButtonIcon from "components/CircleButtonIcon/CircleButtonIcon";
import { ReactComponent as ExitIcon } from "assets/logout.svg";
import { ReactComponent as ResumeIcon } from "assets/play.svg";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

const Background = styled.span`
  z-index: 9999;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.purplePrimary};
  opacity: 0.2;
`;

const GamePausedModal = ({ startGame, withBackground }) => {
  const history = useHistory();

  return (
    <ModalPortal>
      <div>
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

        <Background onClick={startGame} />
      </div>
    </ModalPortal>
  );
};

export default GamePausedModal;
