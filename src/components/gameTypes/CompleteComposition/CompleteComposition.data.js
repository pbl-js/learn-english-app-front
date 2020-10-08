import { useQuery, useMutation, gql } from "@apollo/client";

const SINGLE_TOPIC = gql`
  query GetSingleTopic($topicId: String!) {
    singleTopic(topicId: $topicId) {
      _id
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

export const useGetSingleTopic = (topicId) => {
  const { loading, error, data } = useQuery(SINGLE_TOPIC, {
    variables: { topicId },
  });

  return { data, error, loading };
};

const INCREMENT_WORD_PROGRESS = gql`
  mutation IncrementWordProgress($wordId: ID!) {
    incrementWordProgress(wordId: $wordId) {
      _id
      eng
      pl
      img
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

export const useIncrementWordProgress = (wordId) => {
  const [incrementWordProgress, { data }] = useMutation(
    INCREMENT_WORD_PROGRESS,
    { variables: { wordId } }
  );

  return [incrementWordProgress, data];
};

const INCREMENT_TOPIC_PROGRESS = gql`
  mutation IncrementTopicProgress($topicId: ID!) {
    incrementTopicProgress(topicId: $topicId) {
      _id
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

export const useIncrementTopicProgress = (topicId) => {
  const [
    incrementTopicProgress,
    { data },
  ] = useMutation(INCREMENT_TOPIC_PROGRESS, { variables: { topicId } });

  return [incrementTopicProgress, data];
};
