import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import getRandomInt from "helpers/getRandomInt";
import getRandomLetters from "helpers/getRandomLetters";

import {
  MainWrapper,
  WordToFill,
  LettersWrapper,
  LetterItem,
} from "./LetterByLetter.style";
import WordImage from "components/WordImage/WordImage";
import Letter from "./components/Letter";

const howManyLettersDisplay = 5;
const maxMistakes = 5;

const genNewLetters = (correctLetter) => {
  const letters = getRandomLetters(howManyLettersDisplay - 1);
  letters.splice(getRandomInt(0, howManyLettersDisplay), 0, correctLetter);

  const buttonItems = letters.map((letter) => {
    return {
      id: uuid(),
      letter: letter,
      wrong: false,
    };
  });

  return buttonItems;
};

const LetterByLetter = ({ wordItem, onComplete, onFail }) => {
  const wordArray = wordItem.eng.split("");

  const [wordProgress, setWordProgress] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonLetters, setButtonLetters] = useState(
    genNewLetters(wordArray[0])
  );

  const onClick = async (letter, letterIndex) => {
    if (letter === wordArray[currentIndex]) {
      setWordProgress((prevState) => [...prevState, letter]);
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setMistakes((prevState) => prevState + 1);
      setButtonLetters((prevState) => {
        return prevState.map((letter, index) => {
          if (index === letterIndex) {
            return { ...letter, wrong: true };
          } else {
            return letter;
          }
        });
      });
    }
  };

  useEffect(() => {
    if (currentIndex === wordArray.length) {
      onComplete();
    } else {
      setButtonLetters(genNewLetters(wordArray[currentIndex]));
    }
  }, [currentIndex]);

  useEffect(() => {
    if (mistakes === maxMistakes) {
      onFail();
    }
  }, [mistakes]);

  return (
    <MainWrapper>
      <WordImage>
        <img src={wordItem.img} />
      </WordImage>

      <WordToFill>
        {wordArray.map((wordLetter, index) => {
          return (
            <Letter show={wordProgress[index] === wordLetter} key={index}>
              {wordLetter}
            </Letter>
          );
        })}
      </WordToFill>

      <LettersWrapper>
        {buttonLetters.map((buttonLetter, index) => (
          <LetterItem
            key={buttonLetter.id}
            disabled={buttonLetter.wrong}
            onClick={() => onClick(buttonLetter.letter, index)}
          >
            {buttonLetter.letter}
          </LetterItem>
        ))}
      </LettersWrapper>
    </MainWrapper>
  );
};

export default LetterByLetter;
