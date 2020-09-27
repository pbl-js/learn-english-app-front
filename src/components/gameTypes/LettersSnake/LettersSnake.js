import React from "react";
import uuid from "react-uuid";

import {
  MainWrapper,
  LettersWrapper,
  LetterItem,
  WordText,
} from "./LettersSnake.style";
import WordImage from "components/WordImage/WordImage";

const LettersSnake = ({ wordItem }) => {
  const lettersRowCount = 4;

  const genLetters = () => {
    let letterItems = [];

    for (let index = 0; index < lettersRowCount * lettersRowCount; index++) {
      letterItems.push({ id: uuid(), letter: "k" });
    }

    return letterItems;
  };

  const letterItems = genLetters();

  return (
    <MainWrapper>
      <WordImage>
        <img src={wordItem.img} />
      </WordImage>

      <WordText>safasdf</WordText>

      <LettersWrapper lettersRowCount={lettersRowCount}>
        {letterItems.map((letter) => (
          <LetterItem key={letter.id}>{letter.letter}</LetterItem>
        ))}
      </LettersWrapper>
    </MainWrapper>
  );
};

export default LettersSnake;
