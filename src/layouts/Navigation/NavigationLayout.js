import React from "react";
import routes from "router/routes";

import useCurrentSite from "hooks/useCurrentSite";

import Navigation from "components/Navigation/Navigation";
import AppHeader from "components/AppHeader/AppHeader";
import { StyledMain } from "./NavigationLayout.style";

const NavigationLayout = ({ children }) => {
  const visable = useCurrentSite(routes.game);

  return (
    <>
      <Navigation visable={visable} />
      <StyledMain visable={visable}>
        <AppHeader visable={visable} />
        {children}
      </StyledMain>
    </>
  );
};

export default NavigationLayout;
