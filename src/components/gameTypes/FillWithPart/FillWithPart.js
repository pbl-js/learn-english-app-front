import React from "react";

import { MainWrapper, PartsWrapper } from "./FillWithPart.style";
import WordPart from "./WordPart";
import WordImage from "components/WordImage/WordImage";

const genWordParts = (wordItem) => {
  let parts = [];

  for (let index = 0; index < wordItem.eng.length; index = index + 2) {
    parts.push(wordItem.eng.slice(index, index + 2));
  }

  return parts;
};

const FillWithPart = ({ wordItem }) => {
  const parts = genWordParts(wordItem);

  console.log(parts);

  return (
    <MainWrapper>
      <WordImage>
        <img src={wordItem.img} />
        <p>{wordItem.eng}</p>
      </WordImage>

      <PartsWrapper>
        {parts.map((wordPart) => (
          <WordPart name={wordPart} />
        ))}
      </PartsWrapper>
    </MainWrapper>
  );
};

export default FillWithPart;
