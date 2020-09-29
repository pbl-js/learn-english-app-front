import React from "react";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import { animations } from "theme/theme";

const onExit = (node) => {
  gsap.to(node, {
    y: "100vh",
    duration: animations.modalIn,
  });
};

const onEnter = (node) => {
  gsap.fromTo(
    node,
    {
      y: "100vh",
    },
    {
      y: 0,
      duration: animations.modalIn,
    }
  );
};

const SlideInModal = ({ children, isOpen }) => {
  return (
    <CSSTransition
      in={isOpen}
      unmountOnExit
      timeout={animations.modalIn * 1000}
      onExit={onExit}
      onEnter={onEnter}
    >
      {children}
    </CSSTransition>
  );
};

export default SlideInModal;
