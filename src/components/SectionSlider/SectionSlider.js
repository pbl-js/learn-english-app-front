import React from "react";

import {
  MainWrapper,
  Title,
  TopicsWrapper,
  InnerTopicsWrapper,
} from "./SectionSlider.style";

const SectionSlider = ({ title, children }) => {
  return (
    <MainWrapper onTouchMove={(e) => console.log(e.changedTouches)}>
      <Title>{title}</Title>
      <TopicsWrapper>
        <InnerTopicsWrapper>{children}</InnerTopicsWrapper>
      </TopicsWrapper>
    </MainWrapper>
  );
};

export default SectionSlider;
