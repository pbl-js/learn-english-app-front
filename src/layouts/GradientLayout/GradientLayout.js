import React, { useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { colors, animations } from "theme/theme";

import { useBackgroundState } from "context/BackgroundContext";

import GradientBackground from "components/GradientBackground/GradientBackground";
import GradientBackgroundTop from "./GradientBackgroundTop";

const changeBackgroundWithDelay = (ref, gradient) => {
  gsap.set(ref, {
    backgroundImage: gradient,
    delay: animations.appRouteTransition,
  });
};

const GradientLayout = ({ children }) => {
  const background = useBackgroundState();
  let backgroundRef = useRef(null);

  const gradientComponents = ["orange", "blue", "green", "purple"];

  useEffect(() => {
    switch (background) {
      case "orange":
        return changeBackgroundWithDelay(backgroundRef, background.gradient);
      case "blue":
        return changeBackgroundWithDelay(backgroundRef, background.gradient);
      case "green":
        return changeBackgroundWithDelay(backgroundRef, background.gradient);
      case "purple":
        return changeBackgroundWithDelay(backgroundRef, background.gradient);
      default:
        return changeBackgroundWithDelay(backgroundRef, background.gradient);
    }
  }, [background]);

  return (
    <>
      <div style={{ zIndex: 2 }}>{children}</div>

      {gradientComponents.map(
        (item) =>
          item === background.theme && (
            <GradientBackgroundTop
              key={item}
              index={1}
              gradient={background.gradient}
            />
          )
      )}

      <GradientBackground
        index={0}
        gradient={background.gradient}
        ref={(el) => (backgroundRef = el)}
      />
    </>
  );
};

export default GradientLayout;
