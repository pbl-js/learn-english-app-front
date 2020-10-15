import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import WordImage from "components/WordImage/WordImage";
import { onDragStart, onDrag, onDragEnd } from "./WordItem.drag";

const WordItem = React.forwardRef(
  ({ word, pointerRef, onFail, onComplete }, ref) => {
    useEffect(() => {
      Draggable.create(ref.current, {
        onDragStart,
        onDragStartParams: [pointerRef],
        onDrag: onDrag,
        onDragParams: [pointerRef],
        onDragEnd: onDragEnd,
        onDragEndParams: [pointerRef, word, onComplete, onFail],
      });
    }, []);

    return (
      <WordImage key={word._id} ref={ref}>
        <img src={word.img} />
      </WordImage>
    );
  }
);

export default WordItem;
