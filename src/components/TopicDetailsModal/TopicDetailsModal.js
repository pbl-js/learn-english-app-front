import React from "react";
import styled from "styled-components";
import { colors } from "theme/theme";

import ModalPortal from "components/ModalPortal/ModalPortal";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${colors.blueGradient};
`;

const TopicDetailsModal = ({ closeModal }) => {
  return (
    <ModalPortal closeModal={closeModal}>
      <MainWrapper onClick={closeModal}>dgf</MainWrapper>
    </ModalPortal>
  );
};

export default TopicDetailsModal;
