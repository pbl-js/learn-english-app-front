import React, { memo, useContext } from "react";
import { TimerContext } from "context/TimerContext";

const Omg = () => {
  const { startTimer, stopTimer } = useContext(TimerContext);

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Omg;
