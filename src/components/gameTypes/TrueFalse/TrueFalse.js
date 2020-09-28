import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import getRandomInt from "helpers/getRandomInt";

import { MainWrapper, WordCard, ButtonsWrapper } from "./TrueFalse.style";
import { ReactComponent as CompleteIcon } from "assets/correct.svg";
import { ReactComponent as FailIcon } from "assets/close.svg";

gsap.registerPlugin(Draggable);

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
  const itemToDisplay = genWordImage(wordItem, allWords);
  let wordRef = useRef(null);
  let wordCardPositionStart;

  const checkGoodAnswer = (answer) => {
    if (didMatch === answer) {
      onComplete();
    } else if (didMatch !== answer) {
      onFail();
    }
  };

  const onDragEnd = (value) => {
    const wordCardPositionEnd = wordRef.getBoundingClientRect();

    if (wordCardPositionStart.x > wordCardPositionEnd.x + 150) {
      checkGoodAnswer(true);
    } else if (wordCardPositionStart.x < wordCardPositionEnd.x - 150) {
      checkGoodAnswer(false);
    } else {
      gsap.to(wordRef, { x: 0, y: 0, rotateZ: 0 });
    }
  };

  useEffect(() => {
    Draggable.create(wordRef, {
      onDragEnd: (value) => onDragEnd(value),
      type: "x",
    });

    wordCardPositionStart = wordRef.getBoundingClientRect();
  }, []);

  return (
    <MainWrapper>
      <WordCard ref={(el) => (wordRef = el)}>
        <img src={itemToDisplay} />
        <p>{wordItem.eng}</p>
      </WordCard>

      <ButtonsWrapper>
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
