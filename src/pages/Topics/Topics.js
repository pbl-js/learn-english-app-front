import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

import { gsap } from "gsap";
import { animations } from "theme/theme";

import useData from "./Topics.fetch";

const Topics = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  const { data, loading } = useData();

  useEffect(() => {
    gsap.from([line1, line2], 0.5, {
      delay: animations.appRouteTransition,
      ease: "power3.out",
      y: 64,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <>
      <h1 ref={(el) => (line1 = el)}>Topics</h1>
      <h1 ref={(el) => (line2 = el)}>Topics</h1>
      <Link to={routes.game}>Graj</Link>
    </>
  );
};

export default Topics;
