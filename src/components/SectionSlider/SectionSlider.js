import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { animations } from "theme/theme";

import {
  MainWrapper,
  Title,
  TopicsWrapper,
  InnerTopicsWrapper,
} from "./SectionSlider.style";

gsap.registerPlugin(ScrollTrigger, Draggable);

const SectionSlider = ({ title, children }) => {
  let topicsWrapperRef = useRef(null);
  let sectionWrapperRef = useRef(null);
  let mainWrapperRef = useRef(null);
  let titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set([...sectionWrapperRef.children], {
      y: "100%",
    });
  }, []);

  useEffect(() => {
    gsap.to([...sectionWrapperRef.children], {
      y: "0%",
      delay: animations.appRouteTransition,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: mainWrapperRef,
        scroller: "#scrollWrapper",
      },
    });

    Draggable.create(sectionWrapperRef, {
      type: "x",
      bounds: {
        minX: -sectionWrapperRef.offsetWidth + topicsWrapperRef.offsetWidth,
        maxX: 0,
      },
    });
  }, []);

  return (
    <MainWrapper ref={(el) => (mainWrapperRef = el)}>
      <Title ref={titleRef}>{title}</Title>
      <TopicsWrapper ref={(el) => (topicsWrapperRef = el)}>
        <InnerTopicsWrapper ref={(el) => (sectionWrapperRef = el)}>
          {children}
        </InnerTopicsWrapper>
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default SectionSlider;
