import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { useSpeakContext } from "context/SpeakContext";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { MainWrapper, CenterItem } from "./SwipeCorrect4.style";

import { ReactComponent as LearnIcon } from "assets/learn.svg";
import getRandomInt from "helpers/getRandomInt";
import getUniqueRandomInts from "helpers/getUniqueRandomInts";
import didElementFits from "helpers/didElementFits";
import WordItem from "./WordItem";

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

  wordsToPlay = wordsToPlay.map((item) => {
    return { ...item, correct: false };
  });

  wordsToPlay.splice(getRandomInt(0, howManyWordsDisplay), 0, {
    ...wordItem,
    correct: true,
  });

  return wordsToPlay;
};

const SwipeCorrect4 = ({ wordItem, allWords, onComplete, onFail }) => {
  const { speakText } = useSpeakContext();
  const wordsToPlay = useMemo(() => genWordsToPlay(wordItem, allWords), []);
  console.log(wordsToPlay);

  let pointerRef = useRef(null);
  const itemRefs = useMemo(() =>
    Array.from(wordsToPlay, () => React.createRef())
  );
  let pointerRefPosition = null;
  let itemRefsPosition = [];

  const onDragStart = useCallback(() => {
    gsap.to(pointerRef.current, { scale: 0.4, duration: 0.3 });
  }, []);

  const onDrag = useCallback(() => {
    pointerRefPosition = pointerRef.current.getBoundingClientRect();

    itemRefsPosition = itemRefs.map((itemRef) =>
      itemRef.current.getBoundingClientRect()
    );

    wordsToPlay.forEach((word, index) => {
      if (didElementFits(pointerRefPosition, itemRefsPosition[index])) {
        gsap.to(itemRefs[index].current, { scale: 1.1, duration: 0.3 });
      } else {
        gsap.to(itemRefs[index].current, { scale: 1, duration: 0.3 });
      }
    });
  }, [pointerRef, itemRefs]);

  const onDragEnd = useCallback(() => {
    gsap.to(pointerRef.current, { x: 0, y: 0 });
    gsap.to(pointerRef.current, { scale: 1, duration: 0.3 });

    wordsToPlay.forEach((word, index) => {
      if (didElementFits(pointerRefPosition, itemRefsPosition[index])) {
        word.correct ? onComplete() : onFail();
      }
    });
  }, [, pointerRef, itemRefs, pointerRefPosition]);

  useEffect(() => {
    speakText(wordItem.eng);
  }, []);

  useEffect(() => {
    Draggable.create(pointerRef.current, {
      onDragStart,
      onDrag,
      onDragEnd,
    });
  }, [pointerRef, itemRefs]);

  return (
    <MainWrapper>
      <CenterItem ref={pointerRef}>
        <LearnIcon />
      </CenterItem>

      {wordsToPlay.map((word, index) => (
        <WordItem
          key={word._id}
          ref={itemRefs[index]}
          word={word}
          pointerRef={pointerRef}
          onFail={onFail}
          onComplete={onComplete}
        />
      ))}
    </MainWrapper>
  );
};

export default SwipeCorrect4;
