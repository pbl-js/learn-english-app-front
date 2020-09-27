import React from "react";
import styled, { css } from "styled-components";
import { breakPoints, colors } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";

import GradientBackground from "components/GradientBackground/GradientBackground";
import { useBackgroundState } from "context/BackgroundContext";

const MainWrapper = styled.div`
  position: absolute;
  z-index: ${({ index }) => index};
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
    width: ${({ isTopic }) => (isTopic ? "14px" : "10px")};
    background-color: ${({ isTopic }) =>
      isTopic ? colors.purplePrimary : "transparent"};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ isTopic }) =>
      isTopic ? colors.orangeMenu : "rgba(0, 0, 0, 0.5)"};
    border-radius: 100px;
    border: 4px solid
      ${({ isTopic }) => (isTopic ? colors.purplePrimary : "transparent")};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.orangeMenu};
  }

  @media ${breakPoints.tablet} {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: block;
    }
  }
`;

const AppPageLayout = ({ children, color }) => {
  const isTopics = useCurrentSite(routes.topics);

  return (
    <MainWrapper color={color} index={1} isTopic={isTopics} id="scrollWrapper">
      {children}
    </MainWrapper>
  );
};

export default AppPageLayout;
