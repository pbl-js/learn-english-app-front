import { useQuery, gql } from "@apollo/client";

export const TOPICS = gql`
  query GetTopicsOnlyWithProgress {
    topicsOnlyWithProgress {
      _id
      title
    }
  }
`;

export const WORDS = gql`
  query GetWords {
    words {
      _id
      eng
      pl
      img
      topic {
        _id
        title
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

export default function () {
  const {
    loading: topicsLoading,
    error: topicsError,
    data: topicsData,
  } = useQuery(TOPICS);

  const {
    loading: wordsLoading,
    error: wordsError,
    data: wordsData,
  } = useQuery(WORDS);

  const data =
    topicsData &&
    wordsData &&
    topicsData.topicsOnlyWithProgress.map((topic) => {
      const words = wordsData.words.filter(
        (word) => word.topic._id === topic._id
      );

      return { ...topic, words };
    });
  const loading = topicsLoading || wordsLoading;

  return { data, loading, error: { topicsError, wordsError } };
}
