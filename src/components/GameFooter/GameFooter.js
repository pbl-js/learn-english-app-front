import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useToggle } from "hooks/useToggle";

import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import SlideInModal from "layouts/SlideInModal/SlideInModal";
import TopicDetailsModal from "components/TopicDetailsModal/TopicDetailsModal";
import {
  MainWrapper,
  ShowTopicData,
  ProgressWrapper,
} from "./GameFooter.style";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const GET_SINGLE_TOPIC = gql`
  query GetSingleTopic($topicId: ID!) {
    singleTopic(topicId: $topicId) {
      _id
      title
      img
      section {
        color
      }
      progress {
        status
        learningProgress {
          value
          total
        }
        masteringProgress {
          value
          total
        }
      }
    }
  }
`;

const GameFooter = ({ topicId }) => {
  const [isOpen, toggleOpen] = useToggle(false);

  const { loading, error, data } = useQuery(GET_SINGLE_TOPIC, {
    variables: { topicId },
  });

  const calcPercent = () => {
    const progress = data.singleTopic.progress;
    const isMastering = progress.status === "mastering";
    const total = isMastering
      ? progress.masteringProgress.total
      : progress.learningProgress.total;
    const value = isMastering
      ? progress.masteringProgress.value
      : progress.learningProgress.value;
    return (total / 100) * value;
  };

  data && console.log(data.singleTopic);

  if (data) {
    return (
      <>
        <MainWrapper>
          <ShowTopicData onClick={toggleOpen}>
            <Arrow />
            {data && data.singleTopic.title}
          </ShowTopicData>

          <ProgressWrapper>
            {calcPercent() + "%"}
            <ProgressStatus progressData={data.singleTopic.progress} />
          </ProgressWrapper>
        </MainWrapper>

        <SlideInModal isOpen={isOpen}>
          <TopicDetailsModal
            closeModal={toggleOpen}
            topicItem={data.singleTopic}
            withButton={false}
          />
        </SlideInModal>
      </>
    );
  } else {
    return null;
  }
};

export default GameFooter;
