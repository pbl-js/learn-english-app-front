import React from "react";
import { gql, useQuery } from "@apollo/client";

import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import {
  MainWrapper,
  ShowTopicData,
  ProgressWrapper,
} from "./GameFooter.style";
import { ReactComponent as Arrow } from "assets/arrow.svg";

const GET_SINGLE_TOPIC = gql`
  query GetSingleTopic($topicId: ID!) {
    singleTopic(topicId: $topicId) {
      title
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

  return (
    <MainWrapper>
      <ShowTopicData>
        <Arrow />
        {data && data.singleTopic.title}
      </ShowTopicData>

      {data && (
        <ProgressWrapper>
          {calcPercent() + "%"}
          <ProgressStatus progressData={data.singleTopic.progress} />
        </ProgressWrapper>
      )}
    </MainWrapper>
  );
};

export default GameFooter;
