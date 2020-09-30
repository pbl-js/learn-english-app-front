import getRandomInt from "helpers/getRandomInt";

export default (numberOfInts, min, max) => {
  let randomUniqueInts = [];
  let index = 0;

  while (index < numberOfInts) {
    const randomIndex = getRandomInt(min, max);

    if (!randomUniqueInts.includes(randomIndex)) {
      randomUniqueInts.push(randomIndex);
      index++;
    }
  }

  return randomUniqueInts;
};
