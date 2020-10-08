import React from "react";
import styled from "styled-components";
import { breakPoints } from "theme/theme";
import { lighten, darken } from "polished";

import useWordsByTopicId from "apollo/useWordsByTopicId";

import { ReactComponent as CloseIcon } from "assets/closeLight.svg";
import ModalPortal from "components/ModalPortal/ModalPortal";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";
import ListWrapper from "components/ListWrapper/ListWrapper";
import BigTopicItem from "components/BigTopicItem/BigTopicItem";
import { primaryScrollbar } from "theme/mixins";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${({ darkColor, color }) =>
    "linear-gradient(135deg," + darkColor + "," + color + ")"};

  padding-top: 90px;
  overflow: auto;
  ${primaryScrollbar}
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 80px;
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ color }) => color};
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

const TopicDetailsModal = ({ closeModal, topicItem, withButton }) => {
  const { data, loading, error } = useWordsByTopicId(topicItem._id);

  const darkColor = darken("0.2", topicItem.section.color);
  const lightColor = lighten("0.05", topicItem.section.color);

  return (
    <ModalPortal>
      <MainWrapper darkColor={darkColor} color={topicItem.section.color}>
        <CloseButton onClick={closeModal} />

        <InnerWrapper>
          <BigTopicItem topicItem={topicItem} withButton={withButton} />

          <Divider color={topicItem.section.color} />

          <ListWrapper>
            {data &&
              data.wordsByTopicId.map((word) => (
                <CollectionWordItem key={word._id} wordItem={word} />
              ))}
          </ListWrapper>
        </InnerWrapper>
      </MainWrapper>
    </ModalPortal>
  );
};

export default TopicDetailsModal;
