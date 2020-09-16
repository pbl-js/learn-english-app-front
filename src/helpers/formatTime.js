export default (time) => {
  const seconds = () => {
    let correctSeconds = time % 60;

    if (correctSeconds <= 9) {
      return `0${correctSeconds}`;
    } else {
      return correctSeconds;
    }
  };

  const minutes = () => {
    let correctMinutes = parseInt(time / 60);

    if (correctMinutes <= 9) {
      return `0${correctMinutes}`;
    } else {
      return correctMinutes;
    }
  };

  return `${minutes()}:${seconds()}`;
};
