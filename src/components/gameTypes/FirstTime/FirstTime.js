import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import didElementFits from "helpers/didElementFits";

import { MainWrapper, WordWrapper, Learn, Hide } from "./FirstItem.style";
import WordImage from "components/WordImage/WordImage";

gsap.registerPlugin(Draggable);

const FirstTime = ({ wordItem }) => {
  let containerRef = useRef(null);
  let wordRef = useRef(null);
  let hideRef = useRef(null);
  let learnRef = useRef(null);

  const onDragStart = (value) => {
    gsap.to(wordRef, {
      scale: 0.4,
      duration: 0.3,
    });
    gsap.to([hideRef, learnRef], { scale: 1.5, duration: 0.3 });
  };

  const onDrag = (value) => {
    const hidePosition = hideRef.getBoundingClientRect();
    const learnPosition = learnRef.getBoundingClientRect();
    const wordPosition = wordRef.getBoundingClientRect();

    if (didElementFits(wordPosition, hidePosition)) {
      gsap.to(hideRef, {
        scale: 2,
        duration: 0.3,
      });
    } else {
      gsap.to(hideRef, {
        scale: 1.5,
        duration: 0.3,
      });
    }

    if (didElementFits(wordPosition, learnPosition)) {
      gsap.to(learnRef, {
        scale: 2,
        duration: 0.3,
      });
    } else {
      gsap.to(learnRef, {
        scale: 1.5,
        duration: 0.3,
      });
    }
  };

  const onDragEnd = (value) => {
    const hidePosition = hideRef.getBoundingClientRect();
    const learnPosition = learnRef.getBoundingClientRect();
    const wordPosition = wordRef.getBoundingClientRect();

    gsap.to(wordRef, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to([hideRef, learnRef], { scale: 1, duration: 0.3 });

    if (didElementFits(wordPosition, hidePosition)) {
      console.log("ds");
    } else if (didElementFits(wordPosition, learnPosition)) {
      console.log("dsds");
    } else {
      gsap.to(wordRef, { x: 0, y: 0 });
    }
  };

  useEffect(() => {
    Draggable.create(wordRef, {
      bounds: containerRef,
      onDragStart: (value) => onDragStart(value),
      onDragEnd: (value) => onDragEnd(value),
      onDrag: (value) => onDrag(value),
    });
  }, []);

  return (
    <MainWrapper ref={(el) => (containerRef = el)}>
      <Hide ref={(el) => (hideRef = el)} />

      <WordWrapper ref={(el) => (wordRef = el)}>
        <WordImage src={wordItem.img} />
        {wordItem.eng}
      </WordWrapper>

      <Learn ref={(el) => (learnRef = el)} />
    </MainWrapper>
  );
};

export default FirstTime;
