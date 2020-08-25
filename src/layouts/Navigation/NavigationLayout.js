import React from "react";

import Navigation from "components/Navigation/Navigation";
import { StyledMain } from "./NavigationLayout.style";

const NavigationLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default NavigationLayout;
