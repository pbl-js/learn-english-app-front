import React, { useEffect, useContext, useRef } from "react";
import { gsap } from "gsap";
import { colors } from "theme/theme";

import { BackgroundContext } from "context/BackgroundContext";

import GradientBackground from "components/GradientBackground/GradientBackground";

const changeBackgroundWithDelay = (ref, gradient) => {
  gsap.set(ref, {
    backgroundImage: gradient,
    delay: 1,
  });
};

const GradientLayout = ({ children }) => {
  const { theme } = useContext(BackgroundContext);
  let backgroundRef = useRef(null);

  useEffect(() => {
    switch (theme) {
      case "orange":
        return changeBackgroundWithDelay(backgroundRef, colors.orangeGradient);
      case "blue":
        return changeBackgroundWithDelay(backgroundRef, colors.blueGradient);
      case "green":
        return changeBackgroundWithDelay(backgroundRef, colors.greenGradient);
      case "purple":
        return changeBackgroundWithDelay(backgroundRef, colors.purpleGradient);
      default:
        return changeBackgroundWithDelay(backgroundRef, colors.purpleGradient);
    }
  }, [theme]);

  return (
    <>
      <div style={{ zIndex: 1, position: "relative" }}>{children}</div>

      <GradientBackground
        index={0}
        color={theme}
        ref={(el) => (backgroundRef = el)}
      />
    </>
  );
};

export default GradientLayout;
