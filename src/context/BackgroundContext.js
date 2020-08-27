import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "router/routes";

export const BackgroundContext = createContext();

const BackgroundContextProvider = (props) => {
  const [theme, setTheme] = useState();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case routes.topics:
        return setTheme("orange");
      case routes.dojo:
        return setTheme("blue");
      case routes.collection:
        return setTheme("green");
      case routes.profile:
        return setTheme("purple");
      default:
        return setTheme("purple");
    }
  }, [location]);

  return (
    <BackgroundContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;
