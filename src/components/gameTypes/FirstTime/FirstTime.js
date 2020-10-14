import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useSpeakDispatch } from "context/SpeakContext";
import { useBackgroundState } from "context/BackgroundContext";

import {
  MainWrapper,
  InnerWrapper,
  ColorCircle,
  Learn,
  Hide,
} from "./FirstItem.style";
import WordImage from "components/WordImage/WordImage";
import { onDragStart, onDrag, onDragEnd } from "./draggable";

gsap.registerPlugin(Draggable);

const FirstTime = ({ wordItem, onComplete }) => {
  const { speakText } = useSpeakDispatch();
  const { color } = useBackgroundState();

  let containerRef = useRef(null);
  let wordRef = useRef(null);
  let hideRef = useRef(null);
  let learnRef = useRef(null);
  let whiteCircleRef = useRef(null);
  let transparentCircleRef = useRef(null);

  useLayoutEffect(() => {
    const imageRef = wordRef.children[0];
    const textRef = wordRef.children[1];

    const tl = gsap.timeline();

    tl.set([imageRef, learnRef, hideRef, textRef, transparentCircleRef], {
      scale: 0,
    })
      .set(whiteCircleRef, {
        scale: 0,
        y: -500,
      })
      .set(textRef, {
        y: -100,
      })
      .to(whiteCircleRef, {
        scale: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "bounce.out",
      })
      .to(transparentCircleRef, {
        scale: 1,
        delay: 0.2,
        duration: 0.5,
        ease: "power3.in",
      })
      .set([transparentCircleRef, whiteCircleRef], {
        autoAlpha: 0,
      })
      .to(textRef, {
        scale: 1,
        duration: 0.3,
      })
      .to(textRef, {
        y: 0,
        duration: 0.2,
      })
      .to(imageRef, {
        scale: 1,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => speakText(wordItem.eng),
      })
      .to([learnRef, hideRef], {
        scale: 1,
        duration: 0.3,
        ease: "power3.in",
      });
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

      <InnerWrapper>
        <ColorCircle ref={(el) => (whiteCircleRef = el)} />
        <ColorCircle color={color} ref={(el) => (transparentCircleRef = el)} />

        <WordImage ref={(el) => (wordRef = el)}>
          <img src={wordItem.img} />
          <p>{wordItem.eng}</p>
        </WordImage>
      </InnerWrapper>

      <Learn ref={(el) => (learnRef = el)} />
    </MainWrapper>
  );
};

export default FirstTime;
