import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "router/routes";

import Navigation from "components/Navigation/Navigation";
import { StyledMain } from "./NavigationLayout.style";

const NavigationLayout = ({ children }) => {
  const [visable, setVisable] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.game) {
      setVisable(false);
    } else {
      setVisable(true);
    }
  }, [location]);

  return (
    <>
      <Navigation visable={visable} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default NavigationLayout;
