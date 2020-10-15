import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { flexColumnCenter } from "theme/mixins";
import { breakPoints, fontSize, fontWeight } from "theme/theme";
import { onDragStart, onDrag, onDragEnd } from "./FillWithPart.drag";

gsap.registerPlugin(Draggable);

const MainWrapper = styled.div`
  position: absolute;
  ${flexColumnCenter};
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 1000px;
  color: ${({ color }) => color};
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.semiBold};

  @media ${breakPoints.tablet} {
    width: 100px;
    height: 100px;
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.semiBold};
  }
`;

const WordPart = React.forwardRef(
  ({ wordPart, color, wrapperRef, partRefs, checkCorrectAnswer }, ref) => {
    // Set start position and refresh on resize event
    useLayoutEffect(() => {
      gsap.set(ref.current, {
        top: wordPart.position.top + "%",
        left: wordPart.position.left + "%",
      });

      const setPosition = () => {
        gsap.set(ref.current, {
          top: wordPart.position.top + "%",
          left: wordPart.position.left + "%",
        });
      };

      window.addEventListener("resize", setPosition);

      return () => {
        window.removeEventListener("resize", setPosition);
      };
    }, []);

    useEffect(() => {
      const currentRefs = partRefs.map((ref) => ref.current);

      gsap.config({
        units: { left: "%", top: "%" },
      });

      Draggable.create(ref.current, {
        onDragStart,
        onDragStartParams: [wrapperRef.current],
        onDrag,
        onDragParams: [wrapperRef.current, currentRefs],
        onDragEnd,
        onDragEndParams: [
          wrapperRef.current,
          (drag) => checkCorrectAnswer(wordPart, ref, drag),
        ],
        bounds: "#gameContainer",
        type: "top,left",
      });
    }, [wordPart]);

    return (
      <MainWrapper ref={ref} color={color} position={wordPart.position}>
        {wordPart.text}
      </MainWrapper>
    );
  }
);

export default WordPart;
