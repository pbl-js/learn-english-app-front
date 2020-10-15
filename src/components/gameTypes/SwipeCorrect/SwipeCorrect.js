import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useSpeakDispatch } from "context/SpeakContext";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { MainWrapper, CenterItem } from "./SwipeCorrect.style";

import getRandomInt from "helpers/getRandomInt";
import getUniqueRandomInts from "helpers/getUniqueRandomInts";
import WordItem from "./WordItem";
import { onDragStart, onDrag, onDragEnd } from "./SwipeCorrect.drag";

gsap.registerPlugin(Draggable);

const genWordsToPlay = (wordsCount, wordItem, allWords) => {
  let wordsToPlay = [];
  const allWordsWithoutCorrect = allWords.filter(
    (word) => word.eng !== wordItem.eng
  );
  const randomIndexes = getUniqueRandomInts(
    wordsCount - 1,
    0,
    allWordsWithoutCorrect.length
  );
  randomIndexes.map((index) => wordsToPlay.push(allWordsWithoutCorrect[index]));

  wordsToPlay = wordsToPlay.map((item) => {
    return { ...item, correct: false };
  });

  wordsToPlay.splice(getRandomInt(0, wordsCount), 0, {
    ...wordItem,
    correct: true,
  });

  return wordsToPlay;
};

const SwipeCorrect4 = ({
  wordsCount,
  wordItem,
  allWords,
  onComplete,
  onFail,
}) => {
  const { speakText } = useSpeakDispatch();
  const wordsToPlay = useMemo(
    () => genWordsToPlay(wordsCount, wordItem, allWords),
    []
  );

  let pointerRef = useRef(null);
  const itemRefs = useCallback(
    Array.from(wordsToPlay, () => React.createRef()),
    []
  );

  useEffect(() => {
    speakText(wordItem.eng);
  }, []);

  useEffect(() => {
    Draggable.create(pointerRef.current, {
      onDragStart,
      onDrag,
      onDragParams: [itemRefs],
      onDragEnd,
      onDragEndParams: [itemRefs, wordsToPlay, onComplete, onFail],
    });
  }, []);

  // In animation
  useLayoutEffect(() => {
    const currentRefs = itemRefs.map((item) => item.current);

    gsap.set(pointerRef.current, {
      scale: 0,
      autoAlpha: 0,
    });

    gsap.set(currentRefs, {
      x: 200,
      y: 200,
      autoAlpha: 0,
    });

    gsap.to(pointerRef.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.in",
    });

    gsap.to(currentRefs, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      duration: 0.4,
      ease: "power3.out",
    });
  }, []);

  return (
    <MainWrapper wordsCount={wordsCount}>
      <CenterItem ref={pointerRef}>{wordItem.eng}</CenterItem>

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
