import { useQuery, gql } from "@apollo/client";

export const WORDS_BY_ID = gql`
  query GetWords($topicId: String!) {
    wordsByTopicId(topicId: $topicId) {
      _id
      eng
      pl
      img
      topic {
        _id
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

export default function (topicId) {
  const { loading: loading, error: error, data: data } = useQuery(WORDS_BY_ID, {
    variables: { topicId },
  });

  return { data, error, loading };
}
