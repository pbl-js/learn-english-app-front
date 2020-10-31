import uuid from "react-uuid";
import getRandomInt from "helpers/getRandomInt";
import { themeTypes } from "context/BackgroundContext";

import FirstTime from "components/gameTypes/FirstTime/FirstTime";
import LetterByLetter from "components/gameTypes/LetterByLetter/LetterByLetter";
import LettersSnake from "components/gameTypes/LettersSnake/LettersSnake";
import FillWithPart from "components/gameTypes/FillWithPart/FillWithPart";
import SwipeCorrectFour from "components/gameTypes/SwipeCorrectFour/SwipeCorrectFour";
import SwipeCorrectTwo from "components/gameTypes/SwipeCorrectTwo/SwipeCorrectTwo";
import TrueFalse from "components/gameTypes/TrueFalse/TrueFalse";

const firstTimeVariant = {
  component: FirstTime,
  theme: themeTypes.orange,
};

const gameVariants = [
  {
    component: LetterByLetter,
    theme: themeTypes.blue,
  },
  {
    component: FillWithPart,
    theme: themeTypes.yellow,
  },
  {
    component: SwipeCorrectFour,
    theme: themeTypes.green,
  },
  {
    component: SwipeCorrectTwo,
    theme: themeTypes.green,
  },
  {
    component: TrueFalse,
    theme: themeTypes.purple,
  },
];

const genGameVariant = (status) => {
  const randomGameVariant = gameVariants[getRandomInt(0, gameVariants.length)];

  switch (status) {
    case "unseen":
      return firstTimeVariant;
    case "learning":
      return randomGameVariant;
    case "mastering":
      return randomGameVariant;
    case "complete":
      return null;
    default:
      break;
  }

  // return TrueFalse;
};

export default (wordItem) => {
  const gameVariant = genGameVariant(wordItem.progress.status);

  return {
    id: uuid(),
    gameComponent: gameVariant.component,
    theme: gameVariant.theme,
    wordItem: wordItem,
  };
};
