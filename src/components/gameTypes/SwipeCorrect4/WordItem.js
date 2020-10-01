import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import didElementFits from "helpers/didElementFits";

import WordImage from "components/WordImage/WordImage";

const WordItem = React.forwardRef(
  ({ word, pointerRef, onFail, onComplete }, ref) => {
    const onDragStart = (value) => {
      gsap.to(ref.current, {
        scale: 0.4,
        duration: 0.3,
      });

      gsap.to(pointerRef.current, { scale: 1.5, duration: 0.3 });
    };

    const onDrag = (value) => {
      if (
        didElementFits(
          ref.current.getBoundingClientRect(),
          pointerRef.current.getBoundingClientRect()
        )
      ) {
        gsap.to(pointerRef.current, {
          scale: 2,
          duration: 0.3,
        });
      } else {
        gsap.to(pointerRef.current, {
          scale: 1.5,
          duration: 0.3,
        });
      }
    };

    const onDragEnd = (value) => {
      if (
        didElementFits(
          ref.current.getBoundingClientRect(),
          pointerRef.current.getBoundingClientRect()
        )
      ) {
        word.correct ? onComplete() : onFail();
      } else {
        gsap.to(ref.current, { x: 0, y: 0, scale: 1, duration: 0.3 });
        gsap.to(pointerRef.current, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    useEffect(() => {
      Draggable.create(ref.current, {
        onDragStart: onDragStart,
        onDrag: onDrag,
        onDragEnd: onDragEnd,
      });
    }, [ref]);

    return (
      <WordImage key={word._id} ref={ref}>
        <img src={word.img} />
      </WordImage>
    );
  }
);

export default WordItem;
