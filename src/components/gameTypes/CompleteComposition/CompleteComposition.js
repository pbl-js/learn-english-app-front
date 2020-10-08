import React, { useState, useEffect } from "react";
import {
  useGetSingleTopic,
  useIncrementWordProgress,
  useIncrementTopicProgress,
} from "./CompleteComposition.data";

import GetPoint from "components/gameTypes/GetPoint/GetPoint";

const updateTopicProgress = (wordProgress, incrementTopicProgress) => {
  if (wordProgress.learningProgress.value === 1) {
    incrementTopicProgress();
  } else if (wordProgress.masteringProgress.value === 1) {
    incrementTopicProgress();
  } else if (
    wordProgress.masteringProgress.value ===
    wordProgress.masteringProgress.total
  ) {
    incrementTopicProgress();
  }
};

const CompleteComposition = ({
  gameComponent: GameComponent,
  wordItem,
  allWords,
  onFinish,
}) => {
  const [complete, setComplete] = useState(false);
  const [fail, setFail] = useState(false);

  const [incrementWordProgress, incrementWordData] = useIncrementWordProgress(
    wordItem._id
  );
  const {
    data: topicData,
    error: topicError,
    loading: topicLoading,
  } = useGetSingleTopic(wordItem.topic._id);

  const [
    incrementTopicProgress,
    incrementTopicData,
  ] = useIncrementTopicProgress(wordItem.topic._id);

  const onComplete = () => {
    setComplete(true);
    incrementWordProgress();
  };

  const onFail = () => {
    setFail(true);
  };

  useEffect(() => {
    const progress =
      incrementWordData && incrementWordData.incrementWordProgress.progress;

    incrementWordData && updateTopicProgress(progress, incrementTopicProgress);
  }, [incrementWordData, complete]);

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
