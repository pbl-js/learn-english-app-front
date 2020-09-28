import React, { useState, useEffect } from "react";
import GetPoint from "components/gameTypes/GetPoint/GetPoint";

const CompleteComposition = ({
  gameComponent: GameComponent,
  wordItem,
  allWords,
  onFinish,
}) => {
  const [complete, setComplete] = useState(false);
  const [fail, setFail] = useState(false);

  const onComplete = () => {
    setComplete(true);
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
