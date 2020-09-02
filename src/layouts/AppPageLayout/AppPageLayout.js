import React from "react";
import styled from "styled-components";
import { layout, breakPoints } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

const MainWrapper = styled(GradientBackground)`
  padding: 70px ${layout.mainPadding.tablet} 0 ${layout.mainPadding.tablet};

  @media ${breakPoints} {
    padding: 70px ${layout.mainPadding.desktop} 0 ${layout.mainPadding.desktop};
  }
`;

const AppPageLayout = ({ children, color }) => {
  return (
    <MainWrapper color={color} index={1}>
      {children}
    </MainWrapper>
  );
};

export default AppPageLayout;
