import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import { animations, layout, breakPoints } from "theme/theme";
import useCurrentSite from "hooks/useCurrentSite";
import routes from "router/routes";

import ScrollLayout from "layouts/ScrollLayout/ScrollLayout";

const onExit = (node) => {
  gsap.to(node, {
    duration: animations.appRouteTransition / 2,
    opacity: 0,
  });
};

const onEnter = (node) => {
  gsap.fromTo(
    node,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: animations.appRouteTransition / 2,
      duration: animations.appRouteTransition / 2,
    }
  );
};

const InnerWrapper = styled.div`
  position: relative;

  @media ${breakPoints.tablet} {
    transition: all ${animations.appRouteTransition + "s"};
    height: 100%;
    margin-left: ${({ visable }) => (visable ? "150px" : 0)};
    width: ${({ visable }) => (visable ? "calc(100% - 150px)" : "calc(100%)")};
  }
`;

const FadeInOutLayout = ({ children, match, color }) => {
  const currentSite = useCurrentSite(routes.game);

  return (
    <InnerWrapper visable={!currentSite}>
      <CSSTransition
        in={match != null}
        timeout={animations.appRouteTransition * 1000}
        unmountOnExit
        onExit={onExit}
        onEnter={onEnter}
      >
        <ScrollLayout color={color}>{children}</ScrollLayout>
      </CSSTransition>
    </InnerWrapper>
  );
};

export default FadeInOutLayout;
