import React from "react";
import routes from "router/routes";

import useCurrentSite from "hooks/useCurrentSite";

import { StyledMain } from "./NavigationLayout.style";
import Navigation from "components/Navigation/Navigation";
import AppHeader from "components/AppHeader/AppHeader";

import ProtectedLayout from "layouts/ProtectedLayout/ProtectedLayout";

const NavigationLayout = ({ children }) => {
  const visable = useCurrentSite(routes.game);

  return (
    <ProtectedLayout>
      <Navigation visable={visable} />
      <StyledMain visable={visable}>
        <AppHeader visable={visable} />
        {children}
      </StyledMain>
    </ProtectedLayout>
  );
};

export default NavigationLayout;
