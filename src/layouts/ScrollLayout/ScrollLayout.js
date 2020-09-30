import React from "react";
import styled, { css } from "styled-components";
import { breakPoints, colors } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";
import { secondaryScrollbar, primaryScrollbar } from "theme/mixins";

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
  }

  ${({ secondary }) => (secondary ? secondaryScrollbar : primaryScrollbar)}

  @media ${breakPoints.tablet} {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: block;
    }
  }
`;

const AppPageLayout = ({ children }) => {
  const isTopics = useCurrentSite(routes.topics);

  return (
    <MainWrapper index={1} secondary={isTopics} id="scrollWrapper">
      {children}
    </MainWrapper>
  );
};

export default AppPageLayout;
