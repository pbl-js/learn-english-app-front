import React from "react";
import styled from "styled-components";
import { layout, breakPoints, animations, colors } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";

const TopicsWrappper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: ${({ colorful }) =>
    colorful ? colors.colorfulGradient : null};
`;

const MainWrapper = styled.div`
  padding: 70px ${layout.mainPadding.tablet} 70px ${layout.mainPadding.tablet};

  @media ${breakPoints.tablet} {
    height: 100%;
    padding: 70px ${layout.mainPadding.desktop} 0 ${layout.mainPadding.desktop};

    margin-left: ${({ visable }) => (visable ? "150px" : 0)};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
  }
`;

const PageLayout = ({ children, isTopics }) => {
  const visable = useCurrentSite(routes.game);
  const isTopicsSite = useCurrentSite(routes.topics);

  if (isTopics) {
    return (
      <TopicsWrappper colorful={true} visable={visable}>
        <MainWrapper>{children}</MainWrapper>
      </TopicsWrappper>
    );
  } else {
    return <MainWrapper>{children}</MainWrapper>;
  }
};

export default PageLayout;
