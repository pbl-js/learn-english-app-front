import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { flexColumnCenter } from "theme/mixins";
import { fontSize, fontWeight } from "theme/theme";
import { onDragStart, onDrag, onDragEnd } from "./FillWithPart.drag";

gsap.registerPlugin(Draggable);

const MainWrapper = styled.div`
  position: absolute;
  top: ${({ position }) => position.top + "%"};
  left: ${({ position }) => position.left + "%"};
  ${flexColumnCenter};
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1000px;
  color: ${({ color }) => color};
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
`;

const WordPart = React.forwardRef(
  ({ wordPart, color, wrapperRef, partRefs, checkCorrectAnswer }, ref) => {
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
