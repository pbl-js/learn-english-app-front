import React, { useState, useEffect } from "react";
import GetPoint from "components/gameTypes/GetPoint/GetPoint";

const CompleteComposition = ({
  completeComponent: CompleteComponent,
  gameComponent: GameComponent,
  wordItem,
  onComplete,
}) => {
  const [complete, setComplete] = useState(false);

  if (complete) {
    return <GetPoint wordItem={wordItem} onComplete={onComplete} />;
  } else {
    return <GameComponent wordItem={wordItem} setComplete={setComplete} />;
  }
};

export default CompleteComposition;
