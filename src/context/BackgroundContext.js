import React, {
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import routes from "router/routes";
import { colors } from "theme/theme";
import getRandomInt from "helpers/getRandomInt";

const BackgroundStateContext = React.createContext();
const BackgroundDispatchContext = React.createContext();

const themeTypes = {
  orange: {
    theme: "orange",
    color: colors.orangeTheme.color,
    gradient: colors.orangeTheme.gradient,
  },
  blue: {
    theme: "blue",
    color: colors.blueTheme.color,
    gradient: colors.blueTheme.gradient,
  },
  green: {
    theme: "green",
    color: colors.greenTheme.color,
    gradient: colors.greenTheme.gradient,
  },
  purple: {
    theme: "purple",
    color: colors.purpleTheme.color,
    gradient: colors.purpleTheme.gradient,
  },
  yellow: {
    theme: "yellow",
    color: colors.yellowTheme.color,
    gradient: colors.yellowTheme.gradient,
  },
};

function backgroundReducer(state, action) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, ...action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const BackgroundProvider = ({ children }) => {
  const [state, dispatch] = useReducer(backgroundReducer, {
    theme: "orange",
    color: colors.orangeTheme.color,
    gradient: colors.orangeTheme.gradient,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(routes.topics)) {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["orange"],
      });
    } else if (location.pathname.includes(routes.dojo)) {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["blue"],
      });
    } else if (location.pathname.includes(routes.collection)) {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["green"],
      });
    } else if (location.pathname.includes(routes.profile)) {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["purple"],
      });
    } else if (location.pathname.includes(routes.game)) {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["orange"],
      });
    } else {
      return dispatch({
        type: "SET_THEME",
        payload: themeTypes["blue"],
      });
    }
  }, [location]);

  const setRandomTheme = useCallback(() => {
    const variants = ["orange", "blue", "green", "purple"];
    const randomIndex = getRandomInt(0, variants.length);

    dispatch({ type: "SET_THEME", payload: themeTypes[variants[randomIndex]] });
  });

  return (
    <BackgroundStateContext.Provider value={state}>
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

export {
  BackgroundProvider,
  useBackgroundState,
  useBackgroundDispatch,
  themeTypes,
};
