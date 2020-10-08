import React from "react";
import { useMutation, gql } from "@apollo/client";
import { useSpeakDispatch } from "context/SpeakContext";

import {
  MainWrapper,
  WordIcon,
  InnerWrapper,
  ProgressWrapper,
  MenuButton,
} from "./CollectionWordItem.style";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { ReactComponent as MenuIcon } from "assets/menuDots.svg";

const CollectionWordItem = ({ wordItem }) => {
  const { img, eng, pl, progress } = wordItem;
  const unseen = progress.status === "unseen";
  const { speakText } = useSpeakDispatch();

  const RESET_WORD_PROGRESS_BY_WORD_ID = gql`
    mutation ResetWordProgressByWordId($wordId: ID!) {
      resetWordProgressByWordId(wordId: $wordId) {
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
  const [resetWordProgressByWordId, { data }] = useMutation(
    RESET_WORD_PROGRESS_BY_WORD_ID
  );

  return (
    <MainWrapper>
      <WordIcon src={img} unseen={unseen} />

      <InnerWrapper unseen={unseen} onClick={() => speakText(eng)}>
        <h3>{eng}</h3>
        {unseen ? null : (
          <>
            <p>{pl}</p>
            <ProgressWrapper>
              <ProgressBar
                progress={
                  progress.status === "mastering"
                    ? progress.masteringProgress
                    : progress.learningProgress
                }
                mastering={progress.status === "mastering" ? true : false}
              />
            </ProgressWrapper>
          </>
        )}
      </InnerWrapper>

      <MenuButton>
        <MenuIcon
          onClick={() =>
            resetWordProgressByWordId({ variables: { wordId: wordItem._id } })
          }
        />
      </MenuButton>
    </MainWrapper>
  );
};

export default CollectionWordItem;
