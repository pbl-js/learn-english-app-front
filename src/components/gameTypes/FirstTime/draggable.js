import { gsap } from "gsap";
import didElementFits from "helpers/didElementFits";

const onDragStart = (wordRef, hideRef, learnRef) => {
  gsap.to(wordRef, {
    scale: 0.4,
    duration: 0.3,
  });
  gsap.to([hideRef, learnRef], { scale: 1.5, duration: 0.3 });
};

const onDrag = (wordRef, hideRef, learnRef) => {
  const hidePosition = hideRef.getBoundingClientRect();
  const learnPosition = learnRef.getBoundingClientRect();
  const wordPosition = wordRef.getBoundingClientRect();

  if (didElementFits(wordPosition, hidePosition)) {
    gsap.to(hideRef, {
      scale: 2,
      duration: 0.3,
    });
  } else {
    gsap.to(hideRef, {
      scale: 1.5,
      duration: 0.3,
    });
  }

  if (didElementFits(wordPosition, learnPosition)) {
    gsap.to(learnRef, {
      scale: 2,
      duration: 0.3,
    });
  } else {
    gsap.to(learnRef, {
      scale: 1.5,
      duration: 0.3,
    });
  }
};

const onDragEnd = (wordRef, hideRef, learnRef, onComplete) => {
  const hidePosition = hideRef.getBoundingClientRect();
  const learnPosition = learnRef.getBoundingClientRect();
  const wordPosition = wordRef.getBoundingClientRect();

  if (didElementFits(wordPosition, hidePosition)) {
    onComplete();
  } else if (didElementFits(wordPosition, learnPosition)) {
    onComplete();
  } else {
    gsap.to(wordRef, { x: 0, y: 0 });
    gsap.to(wordRef, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to([hideRef, learnRef], { scale: 1, duration: 0.3 });
  }
};

export { onDragStart, onDrag, onDragEnd };
