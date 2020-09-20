import React from "react";

import { MainWrapper, WordWrapper, Learn, Hide } from "./FirstItem.style";
import WordImage from "components/WordImage/WordImage";

const FirstTime = ({ wordItem }) => {
  return (
    <MainWrapper>
      <Hide />

      <WordWrapper>
        <WordImage src={wordItem.img} />
        {wordItem.eng}
      </WordWrapper>

      <Learn />
    </MainWrapper>
  );
};

export default FirstTime;
