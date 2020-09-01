import { useQuery, gql } from "@apollo/client";

export const SECTIONS = gql`
  query GetSections {
    sections {
      title
      _id
      color
    }
  }
`;

export const TOPICS = gql`
  query GetTopics {
    topics {
      _id
      title
      img
      totalWords
      section {
        _id
      }
    }
  }
`;

export default function () {
  const {
    loading: sectionsLoading,
    error: sectionsError,
    data: sectionsData,
  } = useQuery(SECTIONS);

  const {
    loading: topicsLoading,
    error: topicsError,
    data: topicsData,
  } = useQuery(TOPICS);

  const data =
    sectionsData &&
    topicsData &&
    sectionsData.sections.map((section) => {
      const topics = topicsData.topics.filter(
        (topic) => topic.section._id === section._id
      );

      return { ...section, topics };
    });

  const loading = topicsLoading || sectionsLoading;

  return { data, loading, error: { sectionsError, topicsError } };
}
