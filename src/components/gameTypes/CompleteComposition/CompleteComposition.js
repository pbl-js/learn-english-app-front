import React, { useState } from "react";

const CompleteComposition = ({
  completeComponent: CompleteComponent,
  gameComponent: GameComponent,
  wordItem,
}) => {
  const [complete, setComplete] = useState(false);

  if (complete) {
    return <CompleteComponent wordItem={wordItem} />;
  } else {
    return <GameComponent wordItem={wordItem} />;
  }
};

export default CompleteComposition;
