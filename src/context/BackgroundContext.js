import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import routes from "router/routes";
import getRandomInt from "helpers/getRandomInt";

const BackgroundStateContext = React.createContext();
const BackgroundDispatchContext = React.createContext();

function timeReducer(state, action) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.payload.theme };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const BackgroundProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timeReducer, {
    theme: "orange",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(routes.topics)) {
      return dispatch({ type: "SET_THEME", payload: { theme: "orange" } });
    } else if (location.pathname.includes(routes.dojo)) {
      return dispatch({ type: "SET_THEME", payload: { theme: "blue" } });
    } else if (location.pathname.includes(routes.collection)) {
      return dispatch({ type: "SET_THEME", payload: { theme: "green" } });
    } else if (location.pathname.includes(routes.profile)) {
      return dispatch({ type: "SET_THEME", payload: { theme: "purple" } });
    } else if (location.pathname.includes(routes.game)) {
      return dispatch({ type: "SET_THEME", payload: { theme: "orange" } });
    } else {
      return dispatch({ type: "SET_THEME", payload: { theme: "blue" } });
    }
  }, [location]);

  const setRandomTheme = useCallback(() => {
    const variants = ["orange", "blue", "green", "purple"];
    const randomIndex = getRandomInt(0, variants.length);

    dispatch({ type: "SET_THEME", payload: { theme: variants[randomIndex] } });
  });

  return (
    <BackgroundStateContext.Provider value={state.theme}>
      <BackgroundDispatchContext.Provider value={{ dispatch, setRandomTheme }}>
        {children}
      </BackgroundDispatchContext.Provider>
    </BackgroundStateContext.Provider>
  );
};

function useBackgroundState() {
  const context = React.useContext(BackgroundStateContext);
  if (context === undefined) {
    throw new Error(
      "useBackgroundState must be used within a BackgroundProvider"
    );
  }
  return context;
}

function useBackgroundDispatch() {
  const context = React.useContext(BackgroundDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useBackgroundDispatch must be used within a BackgroundProvider"
    );
  }
  return context;
}

export { BackgroundProvider, useBackgroundState, useBackgroundDispatch };
