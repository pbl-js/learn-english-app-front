import getRandomInt from "helpers/getRandomInt";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default (amount) => {
  let letters = [];

  for (let index = 1; index <= amount; index++) {
    const randomIndex = getRandomInt(0, alphabet.length);

    letters.push(alphabet[randomIndex]);
  }

  return letters;
};
