import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import uuid from "react-uuid";
import { useBackgroundState } from "context/BackgroundContext";

import {
  MainWrapper,
  PartsWrapper,
  WordToFillWrapper,
  BlankLetters,
  StyledWordImage,
} from "./FillWithPart.style";
import WordPart from "./WordPart";
import getRandomInt from "helpers/getRandomInt";

const genWordParts = (wordItem) => {
  let parts = [];

  for (let index = 0; index < wordItem.eng.length; index = index + 2) {
    const wordPart = {
      id: uuid(),
      text: wordItem.eng.slice(index, index + 2),
      current: index === 0 ? true : false,
      position: {
        top: getRandomInt(0, 90),
        left: getRandomInt(0, 90),
      },
    };

    parts.push(wordPart);
  }

  return parts;
};

const FillWithPart = ({ wordItem, onComplete }) => {
  const background = useBackgroundState();

  const [parts, setParts] = useState(genWordParts(wordItem));

  const [correctLetters, setCorrectLetters] = useState("");

  const genBlankLetters = useCallback(() => {
    const blankLettersCount = wordItem.eng.length - correctLetters.length;
    let letters = "";
    for (let index = 0; index < blankLettersCount; index++) {
      letters = letters + "_";
    }
    return letters;
  }, [correctLetters, wordItem]);

  const checkCorrectAnswer = (wordPart, ref, drag) => {
    if (wordPart.current) {
      gsap.to(ref.current, {
        scale: 0,
        duration: 0.2,
      });

      setCorrectLetters((prevState) => {
        return `${prevState}${wordPart.text}`;
      });

      setParts((prevState) => {
        const actualCurrentIndex = prevState.findIndex(
          (item) => item.current === true
        );

        const newstate = prevState.map((item, index) => {
          if (index === actualCurrentIndex) {
            return { ...item, current: false };
          } else if (index == actualCurrentIndex + 1) {
            return { ...item, current: true };
          } else {
            return item;
          }
        });

        return newstate;
      });
    } else {
      gsap.to(ref.current, {
        left: wordPart.position.left,
        top: wordPart.position.top,
        duration: 0.2,
      });

      const tl = gsap.timeline();

      tl.to(wordToFillWrapper.current, {
        x: 40,
        duration: 0.05,
      }).to(wordToFillWrapper.current, {
        x: 0,
        duration: 0.4,
        ease: "Bounce.easeOut",
      });
    }
  };

  // Refs
  const imageRef = useRef(null);
  const partsWrapperRef = useRef(null);
  const wordToFillWrapper = useRef(null);
  const partRefs = useCallback(
    Array.from(parts, () => React.createRef()),
    []
  );

  useEffect(() => {
    if (correctLetters === wordItem.eng) {
      onComplete();
    }
  }, [correctLetters]);

  // In animation
  useLayoutEffect(() => {
    const currentRefs = partRefs.map((item) => item.current);
    gsap.set([...currentRefs, imageRef.current], {
      scale: 0,
      autoAlpha: 0,
    });

    gsap.set(wordToFillWrapper.current, {
      autoAlpha: 0,
    });

    gsap.to([...currentRefs, imageRef.current], {
      scale: 1,
      autoAlpha: 1,
      duration: 0.5,
    });

    gsap.to(wordToFillWrapper.current, {
      autoAlpha: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <MainWrapper>
      <StyledWordImage ref={imageRef} src={wordItem.img} />

      <PartsWrapper ref={partsWrapperRef} partsCount={parts.length}>
        {parts.map((wordPart, index) => (
          <WordPart
            key={wordPart.id}
            ref={partRefs[index]}
            wordPart={wordPart}
            color={background.color}
            wrapperRef={wordToFillWrapper}
            partRefs={partRefs}
            checkCorrectAnswer={checkCorrectAnswer}
          />
        ))}
      </PartsWrapper>

      <WordToFillWrapper ref={wordToFillWrapper}>
        {correctLetters}
        <BlankLetters>{genBlankLetters()}</BlankLetters>
      </WordToFillWrapper>
    </MainWrapper>
  );
};

export default FillWithPart;
