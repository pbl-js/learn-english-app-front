import React from "react";
import routes from "router/routes";

import useCurrentSite from "hooks/useCurrentSite";

import Navigation from "components/Navigation/Navigation";
import { StyledMain, Header } from "./NavigationLayout.style";

const NavigationLayout = ({ children }) => {
  const visable = useCurrentSite(routes.game);
  console.log("visable");
  return (
    <>
      <Navigation visable={visable} />
      <StyledMain>
        <Header></Header>
        {children}
      </StyledMain>
    </>
  );
};

export default NavigationLayout;
