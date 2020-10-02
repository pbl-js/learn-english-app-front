import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useSpeakDispatch } from "context/SpeakContext";

import { MainWrapper, Learn, Hide } from "./FirstItem.style";
import WordImage from "components/WordImage/WordImage";
import { onDragStart, onDrag, onDragEnd } from "./draggable";

gsap.registerPlugin(Draggable);

const FirstTime = ({ wordItem, onComplete }) => {
  const { speakText } = useSpeakDispatch();

  let containerRef = useRef(null);
  let wordRef = useRef(null);
  let hideRef = useRef(null);
  let learnRef = useRef(null);

  useEffect(() => {
    speakText(wordItem.eng);
  }, []);

  useEffect(() => {
    Draggable.create(wordRef, {
      onDragStart,
      onDragStartParams: [wordRef, hideRef, learnRef],
      onDrag,
      onDragParams: [wordRef, hideRef, learnRef],
      onDragEnd,
      onDragEndParams: [wordRef, hideRef, learnRef, onComplete],
    });
  }, []);

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
