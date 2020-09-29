import React from "react";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import { animations } from "theme/theme";

const onExit = (node) => {
  gsap.to(node.children[0], {
    duration: animations.modalIn,
    opacity: 0,
  });

  gsap.to(node.children[1], {
    y: "100vh",
    duration: animations.modalIn,
  });
};

const onEnter = (node) => {
  gsap.fromTo(
    node.children[0],
    {
      opacity: 0,
    },
    {
      opacity: 0.4,
      duration: animations.modalIn,
    }
  );

  gsap.fromTo(
    node.children[1],
    {
      y: "100vh",
    },
    {
      y: 0,
      duration: animations.modalIn,
    }
  );
};

const FadeInSlideInModal = ({ children, isOpen }) => {
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

export default FadeInSlideInModal;
