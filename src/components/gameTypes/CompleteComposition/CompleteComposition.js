import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import GetPoint from "components/gameTypes/GetPoint/GetPoint";

const CompleteComposition = ({
  gameComponent: GameComponent,
  wordItem,
  allWords,
  onFinish,
}) => {
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
  const [incrementWordProgress, { data }] = useMutation(
    INCREMENT_WORD_PROGRESS
  );

  const [complete, setComplete] = useState(false);
  const [fail, setFail] = useState(false);

  const onComplete = () => {
    setComplete(true);
    incrementWordProgress({ variables: { wordId: wordItem._id } });
  };

  const onFail = () => {
    setFail(true);
  };

  if (complete || fail) {
    return <GetPoint wordItem={wordItem} onFinish={onFinish} fail={fail} />;
  } else {
    return (
      <GameComponent
        wordItem={wordItem}
        allWords={allWords}
        onComplete={onComplete}
        onFail={onFail}
      />
    );
  }
};

export default CompleteComposition;
