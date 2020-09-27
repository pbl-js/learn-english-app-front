import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { animations } from "theme/theme";

import GradientBackground from "components/GradientBackground/GradientBackground";

const GradientBackgroundTop = (props) => {
  let backgroundRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set(backgroundRef, {
      opacity: 0,
    });
  });

  useEffect(() => {
    gsap.to(backgroundRef, {
      opacity: 1,
      duration: animations.appRouteTransition / 2,
    });
  });

  return <GradientBackground ref={(el) => (backgroundRef = el)} {...props} />;
};

export default GradientBackgroundTop;
