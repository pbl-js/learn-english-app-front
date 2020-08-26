import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Topics = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <div>
      <h1 ref={(el) => (line1 = el)}>Topics</h1>
      <h1 ref={(el) => (line2 = el)}>Topics</h1>
    </div>
  );
};

export default Topics;
