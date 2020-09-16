import React, { createContext, useState, useEffect, useCallback } from "react";

export const TimerContext = createContext();

const initialTime = 300;

const TimerContextProvider = (props) => {
  const [time, setTime] = useState(initialTime);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      if (time > 0) {
        setTimeout(() => setTime(time - 1), 1000);
      }
    }
  });

  const startTimer = useCallback(() => {
    setStart(true);
  }, []);

  const stopTimer = useCallback(() => {
    setStart(false);
  }, []);

  const value = {
    time,
    initialTime,
    startTimer,
    stopTimer,
  };

  return (
    <TimerContext.Provider value={value}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
