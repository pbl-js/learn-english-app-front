import React, { useEffect, useRef, useMemo } from "react";
import { useSpeakContext } from "context/SpeakContext";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { MainWrapper, CenterItem } from "./SwipeCorrect4.style";
import WordImage from "components/WordImage/WordImage";

import { ReactComponent as LearnIcon } from "assets/learn.svg";
import getRandomInt from "helpers/getRandomInt";
import getUniqueRandomInts from "helpers/getUniqueRandomInts";

const howManyWordsDisplay = 4;

const genWordsToPlay = (wordItem, allWords) => {
  let wordsToPlay = [];
  const allWordsWithoutCorrect = allWords.filter(
    (word) => word.eng !== wordItem.eng
  );
  const randomIndexes = getUniqueRandomInts(
    howManyWordsDisplay - 1,
    0,
    allWordsWithoutCorrect.length
  );
  randomIndexes.map((index) => wordsToPlay.push(allWordsWithoutCorrect[index]));
  wordsToPlay.splice(getRandomInt(0, howManyWordsDisplay), 0, wordItem);

  return wordsToPlay;
};

const SwipeCorrect4 = ({ wordItem, allWords }) => {
  const { speakText } = useSpeakContext();
  const wordsToPlay = useMemo(() => genWordsToPlay(wordItem, allWords), []);

  let pointerRef = useRef(null);
  const multipleRefs = useRef([]);
  multipleRefs.current = [];

  const addToRefs = (el) => {
    if (el && !multipleRefs.current.includes(el)) {
      multipleRefs.current.push(el);
    }
  };

  const onDragStartWord = (value) => {
    gsap.to(value.target, {
      scale: 0.4,
      duration: 0.3,
    });

    gsap.to(pointerRef.current, { scale: 1.5, duration: 0.3 });
  };

  const onDragEndWord = (value) => {
    gsap.to(multipleRefs.current, { x: 0, y: 0, scale: 1, duration: 0.3 });
    gsap.to(pointerRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const onDragStartPointer = (value) => {
    gsap.to(pointerRef.current, { scale: 0.4, duration: 0.3 });
  };

  const onDragEndPointer = (value) => {
    gsap.to(pointerRef.current, { x: 0, y: 0 });
    gsap.to(pointerRef.current, { scale: 1, duration: 0.3 });
  };

  useEffect(() => {
    speakText(wordItem.eng);

    const wordDraggable = Draggable.create(multipleRefs.current, {
      onDragStart: onDragStartWord,
      onDragEnd: onDragEndWord,
    });

    const pointerDraggable = Draggable.create(pointerRef.current, {
      onDragStart: onDragStartPointer,
      onDragEnd: onDragEndPointer,
    });

    return () => {
      wordDraggable[0].kill();
      pointerDraggable[0].kill();
    };
  }, []);

  return (
    <MainWrapper>
      <CenterItem ref={pointerRef}>
        <LearnIcon />
      </CenterItem>

      {wordsToPlay.map((word) => (
        <WordImage key={word._id}>
          <img src={word.img} ref={addToRefs} />
        </WordImage>
      ))}
    </MainWrapper>
  );
};

export default SwipeCorrect4;
