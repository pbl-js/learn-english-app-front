import React from "react";
import { useMutation, gql } from "@apollo/client";
import { lighten, darken } from "polished";

import useWordsByTopicId from "apollo/useWordsByTopicId";

import {
  MainWrapper,
  InnerWrapper,
  Divider,
  CloseButton,
} from "./TopicDetailsModal.style";
import ModalPortal from "components/ModalPortal/ModalPortal";
import CollectionWordItem from "components/CollectionWordItem/CollectionWordItem";
import ListWrapper from "components/ListWrapper/ListWrapper";
import BigTopicItem from "components/BigTopicItem/BigTopicItem";

const RESET_TOPIC_PROGRESS = gql`
  mutation ResetTopicProgress($topicId: ID!) {
    resetTopicProgress(topicId: $topicId) {
      topic {
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
      words {
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
  }
`;

const TopicDetailsModal = ({ closeModal, topicItem, withButton }) => {
  const { data, loading, error } = useWordsByTopicId(topicItem._id);

  const darkColor = darken("0.2", topicItem.section.color);
  const lightColor = lighten("0.05", topicItem.section.color);

  const [resetTopicProgress, { data: resetTopicData }] = useMutation(
    RESET_TOPIC_PROGRESS,
    {
      variables: { topicId: topicItem._id },
      update(cache, { data: { resetTopicProgress } }) {
        resetTopicProgress.words.forEach((word) => {
          cache.modify({
            id: cache.identify(word),
            fields: {
              progress(_) {
                const newProgress = cache.writeFragment({
                  data: word.progress,
                  fragment: gql`
                    fragment ProgressData on Word {
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
                  `,
                });
                return { newProgress };
              },
            },
          });
        });
      },
    }
  );

  return (
    <ModalPortal>
      <MainWrapper darkColor={darkColor} color={topicItem.section.color}>
        <CloseButton onClick={closeModal} />

        <InnerWrapper>
          <BigTopicItem
            topicItem={topicItem}
            withButton={withButton}
            resetTopic={resetTopicProgress}
          />

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
