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
  let titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set([...sectionWrapperRef.current.children], {
      y: "100%",
    });
    gsap.to([...sectionWrapperRef.current.children], {
      y: "0%",
      delay: animations.appRouteTransition,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: mainWrapperRef.current,
        scroller: "#scrollWrapper",
      },
    });
  }, []);

  return (
    <MainWrapper ref={mainWrapperRef}>
      <Title ref={titleRef}>{title}</Title>
      <TopicsWrapper>
        <InnerTopicsWrapper ref={sectionWrapperRef}>
          {children}
        </InnerTopicsWrapper>
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default SectionSlider;
