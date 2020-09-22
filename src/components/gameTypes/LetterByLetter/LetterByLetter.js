import React, { useState, useEffect } from "react";

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

const genNewLetters = (correctLetter) => {
  const letters = getRandomLetters(4);
  letters.splice(getRandomInt(0, 5), 0, correctLetter);

  return letters;
};

const LetterByLetter = ({ wordItem, setComplete }) => {
  const wordArray = wordItem.eng.split("");
  const initialButtonLetters = genNewLetters(wordArray[0]);

  const [wordProgress, setWordProgress] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonLetters, setButtonLetters] = useState(initialButtonLetters);

  console.log(wordProgress);

  const onClick = async (letter) => {
    if (letter === wordArray[currentIndex]) {
      setWordProgress((prevState) => [...prevState, letter]);

      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    setButtonLetters(genNewLetters(wordArray[currentIndex]));
  }, [currentIndex]);

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
        {buttonLetters.map((letter, index) => (
          <LetterItem key={index} onClick={() => onClick(letter)}>
            {letter}
          </LetterItem>
        ))}
      </LettersWrapper>
    </MainWrapper>
  );
};

export default LetterByLetter;
