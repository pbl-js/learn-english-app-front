import React from "react";
import styled from "styled-components";
import { layout, breakPoints } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";
import { animations } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

const MainWrapper = styled(GradientBackground)`
  position: fixed;
  overflow-y: auto;
  width: 100%;
  height: 100%;

  /* width */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Track */
  ::-webkit-scrollbar-track {
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  @media ${breakPoints.tablet} {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;
      display: block;
    }
  }
`;

const InnerWrapper = styled.div`
  transition: all ${animations.appRouteTransition + "s"};
  padding: 70px ${layout.mainPadding.tablet} 70px ${layout.mainPadding.tablet};

  @media ${breakPoints.tablet} {
    height: 100%;
    margin-left: ${({ visable }) => (visable ? "150px" : 0)};
    padding: 70px ${layout.mainPadding.desktop} 0 ${layout.mainPadding.desktop};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
  }
`;

const AppPageLayout = ({ children, color }) => {
  const visable = useCurrentSite(routes.game);

  return (
    <MainWrapper color={color} index={1}>
      <InnerWrapper visable={visable}>{children}</InnerWrapper>
    </MainWrapper>
  );
};

export default AppPageLayout;
