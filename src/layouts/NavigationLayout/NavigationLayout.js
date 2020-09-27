import React from "react";
import routes from "router/routes";

import useCurrentSite from "hooks/useCurrentSite";

import { StyledMain } from "./NavigationLayout.style";
import Navigation from "components/Navigation/Navigation";
import AppHeader from "components/AppHeader/AppHeader";

import ProtectedLayout from "layouts/ProtectedLayout/ProtectedLayout";

const NavigationLayout = ({ children }) => {
  const currentSite = useCurrentSite(routes.game);

  return (
    <ProtectedLayout>
      <Navigation visable={!currentSite} />
      <StyledMain>
        <AppHeader visable={!currentSite} />
        {children}
      </StyledMain>
    </ProtectedLayout>
  );
};

export default NavigationLayout;
