import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animations } from "theme/theme";

import {
  MainWrapper,
  Title,
  TopicsWrapper,
  InnerTopicsWrapper,
} from "./SectionSlider.style";

gsap.registerPlugin(ScrollTrigger);

const SectionSlider = ({ title, children }) => {
  let sectionWrapperRef = useRef(null);
  let mainWrapperRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set([...sectionWrapperRef.current.children], {
      y: "100%",
      autoAlpha: 0,
    });

    // console.log(mainWrapperRef.current.getBoundingClientRect());
  }, []);

  useEffect(() => {
    gsap.to([...sectionWrapperRef.current.children], {
      y: "0%",
      autoAlpha: 1,
      delay: animations.appRouteTransition,
      stagger: 0.15,
      scrollTrigger: {
        trigger: mainWrapperRef.current,
      },
    });
  }, []);

  return (
    <MainWrapper ref={mainWrapperRef}>
      <Title>{title}</Title>
      <TopicsWrapper>
        <InnerTopicsWrapper ref={sectionWrapperRef}>
          {children}
        </InnerTopicsWrapper>
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default SectionSlider;
