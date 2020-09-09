import React from "react";
import styled from "styled-components";
import { layout, breakPoints } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";
import { animations, colors } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

const MainWrapper = styled(GradientBackground)`
  position: absolute;
  overflow-y: auto;
  width: 100%;
  height: 100%;

  /* width */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: rgba(0, 0, 0, 0.5); */
    background-color: ${colors.orangeMenu};
    width: 10px;
    border-radius: 100px;
    border: 4px solid ${colors.purplePrimary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.orangeMenu};
  }

  @media ${breakPoints.tablet} {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 14px;
      background-color: ${colors.purplePrimary};
      display: block;
    }
  }
`;

const AppPageLayout = ({ children, color }) => {
  const visable = useCurrentSite(routes.game);

  return (
    <MainWrapper color={color} index={1} visable={visable}>
      {/* <InnerWrapper visable={visable}> */}
      {children}
      {/* </InnerWrapper> */}
    </MainWrapper>
  );
};

export default AppPageLayout;
