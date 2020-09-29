import React from "react";
import styled from "styled-components";
import { breakPoints } from "theme/theme";
import { lighten, darken } from "polished";

import { ReactComponent as CloseIcon } from "assets/closeLight.svg";
import ModalPortal from "components/ModalPortal/ModalPortal";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${({ darkColor, color }) =>
    "linear-gradient(135deg," + darkColor + "," + color + ")"};
`;

const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  fill: white;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
  }
`;

const TopicDetailsModal = ({ closeModal, color, topicItem }) => {
  const darkColor = darken("0.2", color);
  const lightColor = lighten("0.05", color);

  return (
    <ModalPortal>
      <MainWrapper darkColor={darkColor} color={color}>
        <CloseButton onClick={closeModal} />

        <CollectionWordItem />
      </MainWrapper>
    </ModalPortal>
  );
};

export default TopicDetailsModal;
