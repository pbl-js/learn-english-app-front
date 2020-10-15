import React, { useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { gsap } from "gsap";
import getRandomInt from "helpers/getRandomInt";
import { useSpeakDispatch } from "context/SpeakContext";

import { MainWrapper, WordCard, ButtonsWrapper } from "./TrueFalse.style";
import { ReactComponent as CompleteIcon } from "assets/correct.svg";
import { ReactComponent as FailIcon } from "assets/close.svg";

let didMatch = null;

const genWordImage = (wordItem, allWords) => {
  const trueOrFalseWord = getRandomInt(0, 2);
  const randomIndex = getRandomInt(0, allWords.length);

  if (trueOrFalseWord) {
    didMatch = true;
    return wordItem.img;
  } else {
    didMatch = false;
    return allWords[randomIndex].img;
  }
};

const TrueFalse = ({ wordItem, allWords, onComplete, onFail }) => {
  const { speakText } = useSpeakDispatch();

  const itemToDisplay = useCallback(genWordImage(wordItem, allWords), []);
  let wordRef = useRef(null);
  let buttonsWrapperRef = useRef(null);

  const checkGoodAnswer = (answer) => {
    if (didMatch === answer) {
      onComplete();
    } else if (didMatch !== answer) {
      onFail();
    }
  };

  useEffect(() => {
    speakText(wordItem.eng);
  }, []);

  useLayoutEffect(() => {
    gsap.set([wordRef.current, buttonsWrapperRef.current], {
      autoAlpha: 0,
    });
    gsap.set(wordRef.current, {
      scale: 0.6,
    });
    gsap.to([wordRef.current, buttonsWrapperRef.current], {
      autoAlpha: 1,
      scale: 1,
      duration: 0.4,
    });
  }, []);

  return (
    <MainWrapper>
      <WordCard ref={wordRef}>
        <img src={itemToDisplay} />
        <p>{wordItem.eng}</p>
      </WordCard>

      <ButtonsWrapper ref={buttonsWrapperRef}>
        <button onClick={() => checkGoodAnswer(true)}>
          <CompleteIcon />
        </button>
        lub
        <button onClick={() => checkGoodAnswer(false)}>
          <FailIcon />
        </button>
      </ButtonsWrapper>
    </MainWrapper>
  );
};

export default TrueFalse;
