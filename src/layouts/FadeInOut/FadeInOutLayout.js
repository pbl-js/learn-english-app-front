import React from "react";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import { animations } from "theme/theme";

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

const FadeInOutLayout = ({ children, match }) => {
  return (
    <CSSTransition
      in={match != null}
      timeout={1000}
      unmountOnExit
      onExit={onExit}
      onEnter={onEnter}
    >
      {children}
    </CSSTransition>
  );
};

export default FadeInOutLayout;
