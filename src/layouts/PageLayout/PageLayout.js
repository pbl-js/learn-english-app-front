import React from "react";
import styled from "styled-components";
import { layout, breakPoints, colors } from "theme/theme";

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
  }
`;

const PageLayout = ({ children, isTopics }) => {
  if (isTopics) {
    return (
      <TopicsWrappper colorful={true}>
        <MainWrapper>{children}</MainWrapper>
      </TopicsWrappper>
    );
  } else {
    return <MainWrapper>{children}</MainWrapper>;
  }
};

export default PageLayout;
