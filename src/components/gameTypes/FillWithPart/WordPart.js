import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { flexColumnCenter } from "theme/mixins";
import { fontSize, fontWeight } from "theme/theme";
import { onDragStart, onDrag, onDragEnd } from "./FillWithPart.drag";

gsap.registerPlugin(Draggable);

const MainWrapper = styled.div`
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
      });
    }, [wordPart]);

    return (
      <MainWrapper ref={ref} color={color}>
        {wordPart.text}
      </MainWrapper>
    );
  }
);

export default WordPart;
