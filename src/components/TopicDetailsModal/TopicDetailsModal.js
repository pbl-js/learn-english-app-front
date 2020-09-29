import React from "react";
import styled from "styled-components";
import { breakPoints } from "theme/theme";
import { lighten, darken } from "polished";

import useWordsByTopicId from "apollo/useWordsByTopicId";

import { ReactComponent as CloseIcon } from "assets/closeLight.svg";
import ModalPortal from "components/ModalPortal/ModalPortal";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";
import ListWrapper from "components/ListWrapper/ListWrapper";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${({ darkColor, color }) =>
    "linear-gradient(135deg," + darkColor + "," + color + ")"};

  padding-top: 50px;
  overflow: auto;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  const { data, loading, error } = useWordsByTopicId(topicItem._id);

  const darkColor = darken("0.2", color);
  const lightColor = lighten("0.05", color);

  return (
    <ModalPortal>
      <MainWrapper darkColor={darkColor} color={color}>
        <CloseButton onClick={closeModal} />

        <InnerWrapper>
          <ListWrapper>
            {data &&
              data.wordsByTopicId.map((word) => (
                <CollectionWordItem
                  key={word._id}
                  img={word.img}
                  title={{ eng: word.eng, pl: word.pl }}
                  progress={word.progress}
                />
              ))}
          </ListWrapper>
        </InnerWrapper>
      </MainWrapper>
    </ModalPortal>
  );
};

export default TopicDetailsModal;
