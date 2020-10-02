import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useSpeakDispatch } from "context/SpeakContext";

import didElementFits from "helpers/didElementFits";

import { MainWrapper, Learn, Hide } from "./FirstItem.style";
import WordImage from "components/WordImage/WordImage";

gsap.registerPlugin(Draggable);

const FirstTime = ({ wordItem, onComplete }) => {
  const { speakText } = useSpeakDispatch();

  let containerRef = useRef(null);
  let wordRef = useRef(null);
  let hideRef = useRef(null);
  let learnRef = useRef(null);
  let hidePosition;
  let learnPosition;
  let wordPosition;

  const onDrag = () => {
    hidePosition = hideRef.getBoundingClientRect();
    learnPosition = learnRef.getBoundingClientRect();
    wordPosition = wordRef.getBoundingClientRect();

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

  const onDragStart = () => {
    gsap.to(wordRef, {
      scale: 0.4,
      duration: 0.3,
    });
    gsap.to([hideRef, learnRef], { scale: 1.5, duration: 0.3 });
  };

  const onDragEnd = () => {
    if (didElementFits(wordPosition, hidePosition)) {
      onComplete();
    } else if (didElementFits(wordPosition, learnPosition)) {
      onComplete();
    } else {
      gsap.to(wordRef, { x: 0, y: 0 });
      gsap.to(wordRef, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to([hideRef, learnRef], { scale: 1, duration: 0.3 });
    }
  };

  useEffect(() => {
    speakText(wordItem.eng);
  }, []);

  useEffect(() => {
    Draggable.create(wordRef, {
      onDragStart,
      onDragEnd,
      onDrag,
    });
  }, [onDragStart, onDragEnd, onDrag]);

  return (
    <MainWrapper ref={(el) => (containerRef = el)}>
      <Hide ref={(el) => (hideRef = el)} />

      <WordImage ref={(el) => (wordRef = el)}>
        <img src={wordItem.img} />
        <p>{wordItem.eng}</p>
      </WordImage>

      <Learn ref={(el) => (learnRef = el)} />
    </MainWrapper>
  );
};

export default FirstTime;
