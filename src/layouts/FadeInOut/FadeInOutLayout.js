import React from "react";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

const onExit = (node) => {
  gsap.to(node, {
    duration: 0.5,
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
      delay: 0.5,
      duration: 0.5,
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
