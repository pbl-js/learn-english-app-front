import React, { useEffect, useReducer } from "react";
const CountStateContext = React.createContext();
const CountDispatchContext = React.createContext();

function timeReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, time: state.time + 1 };
    }
    case "DECREMENT": {
      return { ...state, time: state.time - 1 };
    }
    case "START_CLOCK": {
      return { ...state, start: true };
    }
    case "STOP_CLOCK": {
      return { ...state, start: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(timeReducer, {
    time: 300,
    start: false,
  });

  useEffect(() => {
    let interval = null;

    if (state.start) {
      interval = setInterval(() => {
        dispatch({ type: "DECREMENT" });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [state.start]);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function useTimerState() {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error("useTimerState must be used within a TimerProvider");
  }
  return context;
}

function useTimerDispatch() {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error("useTimerDispatch must be used within a TimerProvider");
  }
  return context;
}
export { TimerProvider, useTimerState, useTimerDispatch };
