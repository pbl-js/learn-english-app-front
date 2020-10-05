import React from "react";
import { gql, useQuery } from "@apollo/client";

import ProgressStatus from "components/ProgressStatus/ProgressStatus";
import { MainWrapper, ShowTopicData } from "./GameFooter.style";
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

  data && console.log(data.singleTopic);

  return (
    <MainWrapper>
      <ShowTopicData>
        <Arrow />
        {data && data.singleTopic.title}
      </ShowTopicData>

      {data && <ProgressStatus progressData={data.singleTopic.progress} />}
    </MainWrapper>
  );
};

export default GameFooter;
